import React from "react";
import { NavLink, Outlet } from "react-router-dom";

/* 
NavLink: 컴포넌트는 링크에서 사용하는 경로가 현재 라우트의 경로와 일치하는 경우 
특정 스타일 또는 CSS 클래스를 적용하는 컴포넌트.
이 컴포넌트를 사용할 때 style 또는 className을 설정할 때 
{ isActive: boolean } 을 파라미터로 전달받는 함수 타입의 값을 전달한다.
*/

/* 
컴포넌트 두개로 나눠서 관리
*/

const Articles = () => {
  // 메인 컴포넌트
  return (
    <div>
      {/* 중첩 라우터 사용 = Outlet */}
      <Outlet />
      <ul>
        <ArticleItem id={1} />
        <ArticleItem id={2} />
        <ArticleItem id={3} />
      </ul>
    </div>
  );
};

// 서브 컴포넌트
const ArticleItem = ({ id }) => {
  const ActiveStyle = {
    color: "green",
    fontSize: 20,
  };
  return (
    <li>
      <NavLink
        to={`/articles/${id}`}
        style={({ isActive }) => (isActive ? ActiveStyle : undefined)}
      >
        게시글 {id}
      </NavLink>
    </li>
  );
};

export default Articles;
