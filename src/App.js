import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";

const App = () => {
  return (
    // router 예시 <Route path="주소규칙" element={보여 줄 컴포넌트 JSX} />
    /* 
    URL 파라미터는 /profiles/:username 과 같이 경로에 : 를 사용하여 설정. 
    만약 URL 파라미터가 여러개인 경우엔 /profiles/:username/:field 와 같은 형태로 
    설정할 수 있다.
    */
    <div>
      <Routes>
        <Route element={<Layout />}>
          {/* route index === route path='/' */}
          {/* <Route path="/" element={<Home />} /> */}
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profiles/:username" element={<Profile />} />
        </Route>
        {/* 중첩된 라우터 */}
        <Route path="/articles" element={<Articles />}>
          <Route path=":id" element={<Article />} />
        </Route>
        {/* 로그인 */}
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<MyPage />} />
        {/* *는 wildcard, 일치하는 라우트가 없으면 이 라우트가 화면에 나타나게됨. */}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
};

export default App;
