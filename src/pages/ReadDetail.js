import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
const ReadDetail = () => {
  const { state } = useLocation();
  const id = state.id;
  const detail = state.blogs.filter((blog) => blog.id === id)[0];
  const navigate = useNavigate();
  const buttonClick = (url, id) => {
    navigate(url, { state: { id: id, detail: detail } });
  };
  const deleted = () => {
    axios
      .delete(`https://doingdjango.herokuapp.com/${state.id}/delete`)
      .then((res) => {
        if (res.data.ok) {
          alert("삭제완료!");
          navigate("/");
        }
      });
  };
  return (
    <>
      <h1>{detail.title}</h1>
      <p>작성자 | {detail.writer}</p>
      <p>{detail.body}</p>

      <button onClick={() => buttonClick(`/${detail.id}/update`, detail.id)}>
        Update
      </button>
      <button onClick={deleted}>Delete</button>
    </>
  );
};

export default ReadDetail;
