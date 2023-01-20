import styled from "styled-components";
import check from "..//..//..//..//..//assets/check.png";

// Securtiy Menu Styles

export const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  overflow: none;
  display: flex;
  flex-direction: column;
  background-color: ${(props) =>
    props.theme === "dark" ? "#111b21" : "#ffff"};
  .iconWrapper {
    height: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    .icon {
      color: #ffffff;
      height: 60px;
      width: 60px;
      padding: 16px;
      border-radius: 50%;
      background-color: ${(props) =>
    props.theme === "dark" ? "#07cd9e" : "#07cd9e"};
    }
  }
  .contentWrapper {
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    h3 {
      font-weight: 600;
      color: ${(props) => (props.theme === "dark" ? "#d9dee0" : "#252525")};
    }
    p {
      color: ${(props) => (props.theme === "dark" ? "#8696a0" : "#485157ac")};
      font-size: 13.3px;
      line-height: 22px;
      font-weight: 500;
    }
  }
  .infoWrapper {
    display: flex;
    flex-direction: column;
    padding: 12px 30px;
    label {
      display: flex;
      align-items: center;
      gap: 10px;
      line-height: 40px;
      color: #8696a0;
      font-size: 13.3px;
      .icon {
        height: 22px;
        width: 22px;
        color: #8696a0;
      }
    }
    span {
      font-weight: 600;
      font-size: 14px;
      padding-top: 6px;
      color: #2199EB;
      cursor: pointer;
    }
  }
  hr {
    width: 88%;
    align-self: center;
    opacity: 0.2;
    position: relative;
    top: 12px;
    border: 1px solid #727272a6;
  }
  .selectionWrapper {
    padding: 48px 30px;
    display: flex;
    flex-direction: column;
    .checkbox {
      display: flex;
      align-items: center;
      gap: 18px;
      span {
        color: ${(props) => (props.theme === "dark" ? "#d9dee0" : "#252525")};
        font-size: 16px;
      }
    }
    p {
      color: ${(props) => (props.theme === "dark" ? "#8696a0" : "#8696a0")};
      font-size: 13.4px;
      line-height: 20px;
      padding: 12px 34px;
      span {
        font-weight: 500;
        font-size: 13.4px;
        padding-top: 6px;
        color: #2199EB;
        cursor: pointer;
      }
    }
  }
`;

export const Label = styled.label`
  position: absolute;
  background-color: ${(props) =>
    props.theme === "dark" ? "#111b21" : "#ffff"};
  border: ${(props) =>
    props.theme === "dark" ? "2px solid #7d7d7e" : "2px solid #7d7d7e"};
  border-radius: 2px;
  left: 30px;
  width: 16px;
  height: 16px;
`;
export const CheckBox = styled.input`
  opacity: -1;
  z-index: 1;
  cursor: pointer;
  width: 16px;
  height: 16px;
    &::after {
      //content: url(${check});
      display: block;
      color: white;
      width: 16px;
      height: 16px;
    }
  &:checked {
    border: ${(props) =>
      props.theme === "dark" ? "2px solid #128C7E" : "2px solid #7d7d7e"};
  }
  &:checked + ${Label} {
    background: ${(props) =>
        props.theme === "dark" ? "#005c4b" : "#005c4b"};
    border: ${(props) =>
        props.theme === "dark" ? "2px solid #005c4b" : "2px solid #7d7d7e"};
    &::after {
      content: url(${check});
      position: relative;
      left: 2px;
      bottom: 5px;
      display: block;
      color: white;
      width: 16px;
      height: 16px;
    }
  }
`;
