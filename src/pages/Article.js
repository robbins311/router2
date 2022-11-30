import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Article = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  return (
    <div>
      <h2>게시글 {id}</h2>
      <button onClick={goHome}>home</button>
    </div>
  );
};

export default Article;
