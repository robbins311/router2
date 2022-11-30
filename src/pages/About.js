import React from "react";
import {
  /*   Link,
  useLocation,
  useNavigate, */
  useSearchParams,
} from "react-router-dom";

const About = () => {
  /* const navigate = useNavigate();
  const goBack = navigate("/"); */

  // const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get("detail");
  const mode = searchParams.get("mode");

  const onToggleDetail = () => {
    console.log(detail);
    setSearchParams({ mode, detail: detail === "true" ? false : true });
  };
  const onIncreaseMode = () => {
    console.log(mode);
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setSearchParams({ mode: nextMode, detail });
  };
  return (
    <div>
      <h1>About Page</h1>
      <p>This is react router page</p>
      <p>detail: {detail}</p>
      <p>mode: {mode}</p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      <button onClick={onIncreaseMode}>mode + 1</button>
      {/* <p>쿼리스트링 : {location.search}</p> */}
      {/* <Link onClick={goBack}>main</Link> */}
    </div>
  );
};

export default About;
