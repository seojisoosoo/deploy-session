import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
//axios.get이용

const StyledBlog = styled.button`
  border: 1px solid black;
  background-color: white;
  border-radius: 20px;
  margin: 1vh 0vh;
  padding: 1vh;
  outline: 0;
  color: black;
  cursor: pointer;
  font-size: 20px;
`;
const Button = styled.button`
  text-decoration: none;
`;
const Read = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://doingdjango.herokuapp.com/");
      console.log(response);
      setBlogs(response.data.data);
    };
    fetchData();
  }, []);

  if (!blogs) {
    return null;
  }
  const handleClick = (url, id) => {
    navigate(url, { state: { id: id, blogs: blogs } });

    console.log(blogs[id]);
  };
  return (
    <>
      <Link to="/create">
        <Button>글쓰기</Button>
      </Link>

      {blogs.map((blog) => (
        <div key={blog.id}>
          <StyledBlog onClick={() => handleClick(`/${blog.id}`, blog.id)}>
            {blog.title}
          </StyledBlog>
        </div>
      ))}
    </>
  );
};

export default Read;
