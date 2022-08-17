import React from "react";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const navigate = useNavigate();
  const onSubmit = () => {
    axios
      .post(
        "https://doingdjango.herokuapp.com/",
        {
          title: titleRef.current.value,
          writer: writerRef.current.value,
          body: bodyRef.current.value,
        },
        {
          "Content-Type": "application/json",
        }
      )
      .then((res) => {
        if (res.data.ok) {
          alert("추가완료!");
          navigate("/");
        }
      });
  };
  const titleRef = useRef(null);
  const writerRef = useRef(null);
  const bodyRef = useRef(null);

  return (
    <>
      제목:
      <input type="text" ref={titleRef} />
      작성자:
      <input type="text" ref={writerRef} />
      본문:
      <textarea cols="30" rows="10" ref={bodyRef} />
      <button onClick={onSubmit}>submit</button>
    </>
  );
};

export default Create;
