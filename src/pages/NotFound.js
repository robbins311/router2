import React from "react";
import styled from "styled-components";
const Found = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 64px;
  position: absolute;
  width: 100%;
  height: 100%;
`;

const NotFound = () => {
  return <Found>404</Found>;
};

export default NotFound;
