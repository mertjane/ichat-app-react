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
  .header {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 15px 30px;
    height: 10%;
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
    height: 65%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 36px 0;
    img {
      max-width: 600px;
      max-height: auto;
      box-shadow: ${(props) =>
        props.theme === "dark"
          ? "none"
          : "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"};
      object-fit: contain;
      background: #fff;
      box-sizing: border-box;
    }
  }
  .footer {
    height: 25%;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .input-field {
      width: 100%;
      height: 40%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
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
          color: ${(props) =>
            props.theme === "dark" ? "#ddddddb2" : "#677780"};
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
    .group {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      width: 100%;
      height: 60%;
      .images {
        width: 58px;
        height: 58px;
        border-radius: 6px;
        background: #ffff;
        object-fit: contain;
        cursor: pointer;
        &.active {
          border: 4px solid #00a884;
        }
        &.inactive {
          border: none;
        }
      }
      .add {
        width: 58px;
        height: 58px;
        border: ${(props) =>
          props.theme === "dark" ? "1px solid #ffff" : "1px solid #bebebedd"};
        border-radius: 6px;
        background-color: ${(props) =>
          props.theme === "dark" ? "#111b21" : "#e9edef"};
        display: flex;
        align-items: center;
        justify-content: center;
        input {
          opacity: 0;
          z-index: 9999;
          position: absolute;
          bottom: 40px;
          height: 50px;
          width: 50px;
          cursor: pointer;
        }
        .addBtn {
          color: ${(props) => (props.theme === "dark" ? "#96969e" : "#677780")};
          bottom: 40px;
          height: 50%;
          width: 50%;
          cursor: pointer;
        }
      }
    }
    .confirmBtn {
      background-image: url(${confirmBtnLight});
      background-repeat: no-repeat;
      background-position: center;
      background-color: #00a884;
      padding: 15px;
      border-radius: 50%;
      cursor: pointer;
      height: 30px;
      width: 30px;
      position: absolute;
      right: 24px;
    }
  }
`;
