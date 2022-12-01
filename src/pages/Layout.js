import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

/* 중첩된 라우트와 Outlet은 공통 레이아웃에 유용하게 사용한다. */

const Layout = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  const goArticles = () => {
    // replace를 true로 하면 페이지를 이동할때 현재 페이지를 기록에 남기지 않음,
    navigate("/articles", { replace: true });
  };
  return (
    <div>
      <header style={{ background: "lightgray", padding: 16, fontSize: 24 }}>
        <button onClick={goBack}>뒤로가기</button>
        <button onClick={goArticles}>게시글 목록</button>
      </header>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
