import styled from "styled-components";
import closeBtnLight from "../../assets/close_btn_light.svg";
import closeBtnDark from "../../assets/close_btn.svg";
import searchBtnDark from "../../assets/search_btn_dark.svg";
import searchBtnLight from "../../assets/search_btn_light.svg";

export const SlideSearchWrapper = styled.div`
  width: 27%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: ${(props) =>
    props.theme === "dark" ? "#111b21" : "#ffffff"};
  .header {
    height: 40px;
    display: flex;
    align-items: center;
    background-color: ${(props) =>
      props.theme === "dark" ? "#2a373f" : "#f0f2f5"};
    padding: 10px 30px;
    gap: 35px;
    border-left: ${(props) =>
      props.theme === "dark" ? "1px solid #ffffff2b" : "1px solid #726e6d63"};
    .closeBtn {
      width: 16px;
      height: 16px;
      background-image: ${(props) =>
        props.theme === "dark"
          ? `url(${closeBtnDark})`
          : `url(${closeBtnLight})`};
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      cursor: pointer;
    }
    p {
      font-size: 15.8px;
      cursor: default;
      color: ${(props) => (props.theme === "dark" ? "#ddddddb9" : "#454647")};
    }
  }
  .navigation {
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) =>
      props.theme === "dark" ? "#111b21" : "#ffff"};
    padding: 10px 0px;
    border-bottom: ${(props) =>
        props.theme === "dark" ? "1px solid #ffffff14" : "1px solid #dddd"};
    input {
      padding: 8px;
      border: none;
      border-radius: 0 6px 6px 0;
      outline: none;
      background-color: ${(props) =>
        props.theme === "dark" ? "#2a373f" : "#f0f2f5"};
      width: 83%;
      color: ${(props) => (props.theme === "dark" ? "#d9dee0" : "#33383b")};
      ::placeholder {
        color: ${(props) => (props.theme === "dark" ? "#ddddddb9" : "#677780")};
        font-weight: 500;
      }
      &:focus {
        &::placeholder {
          opacity: 0;
        }
      }
    }
    .searcBtn {
      background-image: ${(props) =>
        props.theme === "dark"
          ? `url(${searchBtnDark})`
          : `url(${searchBtnLight})`};
      background-repeat: no-repeat;
      background-position: center;
      cursor: pointer;
      border-radius: 6px 0 0 6px;
      background-color: ${(props) =>
        props.theme === "dark" ? "#2a373f" : "#f0f2f5"};
      padding: 17px;
    }
  }
  .body {
    height: calc(100% - 115px);
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    text-align: center;
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 7px;
    }
    &::-webkit-scrollbar-thumb {
      background: ${(props) =>
        props.theme === "dark" ? "#435058" : "#9e9d99"};
      border-radius: 2px;
    }
    h4 {
      font-weight: 400;
      font-size: 15px;
      color: ${(props) => (props.theme === "dark" ? "#dddddd81" : "#454647ab")};
      margin-top: 88px;
    }
    .message-content {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding: 15px 14px;
      border-bottom: ${(props) =>
        props.theme === "dark" ? "1px solid #ffffff14" : "1px solid #dddd"};
      cursor: pointer;
      &:hover {
        background-color: ${(props) =>
          props.theme === "dark" ? "#2a373f" : "#f0f2f5"};
      }
    }
    .section {
      box-sizing: border-box;
      height: min-content;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      width: 100%;
      text-align: left;
      gap: 4px;
      span {
        color: ${(props) => (props.theme === "dark" ? "#aebac1cc" : "#5a6369")};
        font-size: 12.5px;
        font-weight: 400;
      }
      p {
        color: ${(props) => (props.theme === "dark" ? "#AEBAC1" : "#5a6369")};
        font-size: 13.4px;
        font-weight: 500;
      }
    }
  }
`;
