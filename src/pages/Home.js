import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>This is Home Page</p>
      <ul>
        <li>
          <Link to={"/about"}>about page</Link>
        </li>
        <li>
          <Link to={"/profiles/velopert"}>velopert</Link>
        </li>
        <li>
          <Link to={"/profiles/robbins"}>robbins</Link>
        </li>
        <li>
          <Link to={"/void"}>Not Found 404</Link>
        </li>
        <li>
          <Link to="/articles">게시글 목록</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
