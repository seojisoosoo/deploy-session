import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ReadDetail = () => {
  const { state } = useLocation();
  const id = state.id;
  const detail = state.blogs.filter((blog) => blog.id === id)[0];

  return (
    <>
      <h1>{detail.title}</h1>
      <p>작성자 | {detail.writer}</p>
      <p>{detail.body}</p>
    </>
  );
};

export default ReadDetail;
