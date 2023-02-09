import styled from "styled-components";

export const Overlay = styled.div`
  background-color: ${(props) =>
    props.theme === "dark" ? "#111b21d1" : "#f8f8f89b"};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 998;
  .modal-wrapper {
    width: 520px;
    height: 300px;
    border-radius: 6px;
    position: absolute;
    background-color: ${(props) =>
      props.theme === "dark" ? "#2a373f" : "#ffff"};
    top: 30%;
    left: 36%;
    box-shadow: ${(props) =>
      props.theme === "dark" ? "none" : "rgba(0, 0, 0, 0.24) 0px 3px 8px"};
  }
  .title {
    color: ${(props) => (props.theme === "dark" ? "#cbd1d6" : "#565b5f")};
    font-size: 18px;
    font-weight: 400;
    padding: 24px 30px 18px 30px;
  }
  p {
    padding: 0 30px;
    color: ${(props) => (props.theme === "dark" ? "#cbd1d6" : "#555555dd")};
    font-size: 13.4px;
    font-weight: 400;
  }
  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #dddddd22;
    margin: 30px 30px 20px 30px;
  }
  span {
    color: ${(props) => (props.theme === "dark" ? "#63747e" : "#dddddda9")};
    font-weight: 400;
    font-size: 13px;
    padding: 0px 30px;
    display: flex;
  }
  .btnGroup {
    display: flex;
    box-sizing: border-box;
    height: calc(100% - 175px);
    align-items: flex-end;
    justify-content: flex-end;
    gap: 8px;
    padding-bottom: 24px;
    padding-right: 30px;
    button {
      height: 45px;
      width: 110px;
      color: #00a884;
      background-color: ${(props) =>
        props.theme === "dark" ? "#2a373f" : "#ffff"};
      font-weight: 600;
      font-size: 14px;
      outline: none;
      border: ${(props) =>
        props.theme === "dark" ? "1px solid #464747a0" : "1px solid #ddd"};
      border-radius: 3px;
      cursor: pointer;
      :hover {
        box-shadow: ${(props) =>
          props.theme === "dark" ? "none" : "rgba(0, 0, 0, 0.16) 0px 1px 4px"};
        background-color: ${(props) =>
          props.theme === "dark" ? "#3d4e58ab" : "none"};
        transition: ${(props) =>
          props.theme === "dark" ? "350ms all ease" : "200ms all ease"};
      }
    }
    .confirm-btn {
      height: 45px;
      width: 110px;
      color: ${(props) => (props.theme === "dark" ? "#111b21" : "#ffff")};
      font-weight: 600;
      font-size: 14px;
      background-color: #00a884;
      outline: none;
      border-radius: 3px;
      border: none;
      cursor: pointer;
      :hover {
        background-color: ${(props) =>
          props.theme === "dark" ? "#0cb691" : "#19aa99d6"};
        transition: 600ms all ease;
      }
    }
  }
`;
