import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

export const MoonLoader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.theme === "dark" ? "#2a373f" : "#ffff"};
  border-radius: 50%;
  padding: 8px;
  align-self: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin-bottom: 12px;
  .lds-ring {
    display: inline-block;
    position: relative;
    width: 23px;
    height: 23px;
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 23px;
    height: 23px;
    margin: 0px;
    border: 4px solid #067a65;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #067a65 transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Spinner = () => {
  const { theme } = useSelector((state) => state.user.userInfo);
  return (
    <MoonLoader theme={theme}>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </MoonLoader>
  );
};

export default Spinner;
