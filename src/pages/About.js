import React from "react";
import { useSearchParams } from "react-router-dom";

const About = () => {
  /* 
    useLocation Hook
    pathname: 현재 주소의 경로 (쿼리스트링 제외)
    search: 맨 앞의 ? 문자 포함한 쿼리스트링 값
    hash: 주소의 # 문자열 뒤의 값 (주로 History API 가 지원되지 않는 구형 브라우저에서 클라이언트 라우팅을 사용할 때 쓰는 해시 라우터에서 사용합니다.)
    state: 페이지로 이동할때 임의로 넣을 수 있는 상태 값
    key: location 객체의 고유 값, 초기에는 default 이며 페이지가 변경될때마다 고유의 값이 생성됨
  */
  const [searchParams, setSearchParams] = useSearchParams();
  /* 
  useSearchParams 는 배열 타입의 값을 반환하며, 첫번째 원소는 쿼리파라미터를 조회하거나 수정하는 메서드들이 담긴 객체를 반환. 
  get 메서드를 통해 특정 쿼리파라미터를 조회할 수 있고, set 메서드를 통해 특정 쿼리파라미터를 업데이트 할 수 있다. 
  만약 조회시에 쿼리파라미터가 존재하지 않는다면 null 로 조회됨. 
  두번째 원소는 쿼리파라미터를 객체형태로 업데이트할 수 있는 함수를 반환.
  
  쿼리파라미터를 사용하실 때 주의하실점은 쿼리파라미터를 조회할 때 값은 무조건 문자열 타입. 
  즉, true 또는 false 값을 넣게 된다면 값을 비교할 때 꼭 'true' 와 같이 따옴표로 감싸서 비교, 
  숫자를 다루게 된다면 parseInt 를 사용하여 숫자 타입으로 변환.
  */
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
