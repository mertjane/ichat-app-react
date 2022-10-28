import React from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";

import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #e4e2de;
  display: flex;
  justify-content: center;
  .background {
    width: 100%;
    height: 220px;
    background: #BFA2DB;
    position: absolute;
  }
`;

const App = () => {
  return (
    <Container>
      <div className="background"/>
        <Home />
    </Container>
  );
};

export default App;
