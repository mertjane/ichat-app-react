import styled from "styled-components";
import check from "..//..//..//..//..//assets/check.png";

export const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ContentWrapper = styled.section`
  width: 100%;
  height: calc(100% - 124px);
  display: flex;
  flex-direction: column;
  font-size: small;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) => (props.theme === "dark" ? "#435058" : "#9e9d99")};
    border-radius: 2px;
  }
  .checkBoxWrapper {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
    min-height: 60px;
    span {
      color: ${(props) => (props.theme === "dark" ? "#96969e" : "#485157ac")};
      font-size: 13.4px;
      font-weight: 400;
    }
  }
  .content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 40px;
    column-gap: 12px;
    row-gap: 12px;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    .btn {
      width: 86px;
      height: 86px;
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      border: none;
      cursor: pointer;
      &:hover {
        border: ${(props) =>
          props.theme === "dark" ? "4px solid #d9dee0" : "4px solid #ffff"};
      }
      &:focus {
        border: ${(props) =>
          props.theme === "dark" ? "4px solid #d9dee0" : "4px solid #ffff"};
      }
    }
  }
`;

export const Label = styled.label`
  position: relative;
  background-color: ${(props) =>
    props.theme === "dark" ? "#111b21" : "#ffff"};
  border: ${(props) =>
    props.theme === "dark" ? "2px solid #c5c9ca" : "2px solid #7d7d7e"};
  border-radius: 2px;
  left: -15px;
  width: 16px;
  height: 16px;
`;
export const CheckBox = styled.input`
  opacity: -1;
  z-index: 1;
  cursor: pointer;
  position: relative;
  width: 16px;
  height: 16px;
  left: 4px;
  &::after {
    // content: url(${check});
    display: block;
    color: white;
    width: 16px;
    height: 16px;
  }
  &:checked {
    border: ${(props) =>
      props.theme === "dark" ? "2px solid #00a884" : "2px solid #7d7d7e"};
  }
  &:checked + ${Label} {
    background: ${(props) => (props.theme === "dark" ? "#00a884" : "#005c4b")};
    border: ${(props) =>
      props.theme === "dark" ? "2px solid #00a884" : "2px solid #7d7d7e"};
    &::after {
      content: url(${check});
      position: relative;
      left: 2px;
      bottom: 2px;
      display: block;
      color: white;
      width: 16px;
      height: 16px;
    }
  }
`;
