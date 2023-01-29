import styled from "styled-components";
import confirmBtnLight from "../../assets/confirm_light.svg";
//import confirmBtnDark from "../../assets/confirm_dark"

export const Layer = styled.div`
  background-color: ${(props) =>
    props.theme === "dark" ? "#111b21" : "#e9edef"};
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  // top: 80px;
  .header {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 15px 30px;
    height: 8%;
    .closeBtn {
      color: ${(props) => (props.theme === "dark" ? "#aebac1" : "#677780")};
      height: 28px;
      width: 28px;
      cursor: pointer;
    }
    .btn-group {
      height: 100%;
      display: flex;
      align-items: center;
      gap: 26px;
      position: relative;
      left: 32%;
      .btn {
        color: ${(props) => (props.theme === "dark" ? "#aebac1" : "#677780")};
        height: 24px;
        width: 24px;
        cursor: pointer;
      }
    }
  }
  .item-preview {
    height: 74%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 36px 0;
    img {
      box-shadow: ${(props) =>
        props.theme === "dark"
          ? "none"
          : "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"};
      object-fit: contain;
      background: #fff;
    }
  }
  .input-field {
    height: 8%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 14px;
    margin: 0 30px 0 30px;
    border-bottom: ${(props) =>
      props.theme === "dark" ? "1px solid #ffffff18" : "1px solid #dddd"};
    input {
      padding: 14px;
      width: 60%;
      border: none;
      border-radius: 8px 0 0 8px;
      outline: none;
      background-color: ${(props) =>
        props.theme === "dark" ? "#2a373f" : "#fffff"};
      color: ${(props) => (props.theme === "dark" ? "#d9dee0" : "#33383b")};
      ::placeholder {
        color: ${(props) => (props.theme === "dark" ? "#ddddddb2" : "#677780")};
        font-weight: 500;
      }
    }
    .searchBtn {
      color: ${(props) => (props.theme === "dark" ? "#96969e" : "#677780")};
      cursor: pointer;
      border-radius: 0 8px 8px 0;
      background-color: ${(props) =>
        props.theme === "dark" ? "#2a373f" : "#ffff"};
      padding: 13px;
      height: 20px;
      width: 20px;
    }
  }
  .footer {
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 0;
    .group {
      display: flex;
      align-items: center;
      gap: 7px;
      img {
        width: 58px;
        height: 58px;
        border: 4px solid #00a884;
        border-radius: 6px;
        background: #ffff;
        cursor: pointer;
      }
      .add {
        width: 58px;
        height: 58px;
        border: ${(props) =>
          props.theme === "dark" ? "2px solid #ffff" : "1px solid #bebebedd"};
        border-radius: 6px;
        background-color: ${(props) =>
          props.theme === "dark" ? "#111b21" : "#e9edef"};
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        .addBtn {
          color: ${(props) => (props.theme === "dark" ? "#96969e" : "#677780")};
          position: inline-block;
          height: 35px;
          width: 35px;
        }
      }
    }
    .confirmBtn {
      position: relative;
      left: 38.7%;
      background-image: url(${confirmBtnLight});
      background-repeat: no-repeat;
      background-position: center;
      background-color: #00a884;
      padding: 15px;
      border-radius: 50%;
      cursor: pointer;
      height: 30px;
      width: 30px;
    }
  }
`;
