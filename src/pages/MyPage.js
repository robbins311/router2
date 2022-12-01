import React from "react";
import { Navigate } from "react-router-dom";

const MyPage = () => {
  const isLoggedIn = false;
  if (!isLoggedIn) {
    return <Navigate to={"/login"} replace={true} />;
  }
  return <div>My Page</div>;
};
/* 
위 컴포넌트에서는 만약 이 값이 false 라면 Navigate 컴포넌트를 통해 /login 경로로 이동.
여기서 replace props는 useNavigate와 동일. 
페이지를 이동할 때 현재 페이지를 기록에 남기지 않기 때문에 
이동 후 뒤로가기를 눌렀을 때 2 페이지 전의 페이지로 이동합니다.(로그인 페이지 중복이동 방지)
*/
export default MyPage;
