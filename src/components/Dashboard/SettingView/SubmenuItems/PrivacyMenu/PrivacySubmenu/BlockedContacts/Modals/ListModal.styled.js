import styled from "styled-components";

export const Overlay = styled.section`
  background-color: ${(props) =>
    props.theme === "dark" ? "#111b21d1" : "#f8f8f89b"};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 998;
  .modalWrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 430px;
    height: 700px;
    border-radius: 5px;
    position: absolute;
    background-color: ${(props) =>
      props.theme === "dark" ? "#111b21" : "#ffff"};
    top: 10%;
    left: 35%;
    box-shadow: ${(props) =>
      props.theme === "dark" ? "none" : "rgba(0, 0, 0, 0.24) 0px 3px 8px"};
    z-index: 999;
    .header {
      height: 70px;
      background-color: ${(props) =>
        props.theme === "dark" ? "#2a373f" : "#075E54"};
      border-radius: 3px 3px 0 0;
      display: flex;
      align-items: center;
      padding: 0 20px;
      gap: 26px;
      .icon {
        color: ${(props) => (props.theme === "dark" ? "#8696a0" : "#dddd")};
        height: 25px;
        width: 25px;
        cursor: pointer;
      }
      h3 {
        color: ${(props) => (props.theme === "dark" ? "#d9dee0" : "#ffff")};
        font-weight: 600;
      }
    }
    .searchWrapper {
      display: flex;
      height: 36px;
      align-items: center;
      padding: 10px 15px;
      .searchBtn {
        color: ${(props) => (props.theme === "dark" ? "#8696a0" : "#464d52")};
        cursor: pointer;
        border-radius: 8px 0 0 8px;
        background-color: ${(props) =>
          props.theme === "dark" ? "#2a373f" : "#dddddd90"};
        height: 38px;
        width: 22px;
        padding-left: 16px;
      }
      input {
        width: 100%;
        height: 100%;
        border-radius: 0 8px 8px 0;
        outline: none;
        border: none;
        padding-left: 18px;
        background-color: ${(props) =>
          props.theme === "dark" ? "#2a373f" : "#dddddd90"};
        color: ${(props) => (props.theme === "dark" ? "#d9dee0" : "#33383b")};
        ::placeholder {
          color: ${(props) => (props.theme === "dark" ? "#96969e" : "#677780")};
          font-weight: 500;
        }
      }
    }
    .userList {
      display: flex;
      flex-direction: column;
      max-height: calc(100% - 116px);
      overflow-y: auto;
      &::-webkit-scrollbar {
        width: 7px;
      }
      &::-webkit-scrollbar-thumb {
        background: ${(props) =>
          props.theme === "dark" ? "#435058" : "#9e9d99"};
        border-radius: 2px;
      }
    }
  }
`;


export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  padding: 8px 0;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.theme === "dark" ? "#2a373f" : "#dddddda4"};
  }
  .user-avatar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5px 15px;
    .avatar {
      height: 52px;
      width: 52px;
      border-radius: 50%;
    }
  }
  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 8px 0;
    border-bottom: ${(props) =>
      props.theme === "dark" ? "1px solid #96969632" : "1px solid #ddddddb0"};
    label {
      display: flex;
      flex-direction: column;
      cursor: pointer;
      color: ${(props) => (props.theme === "dark" ? "#d9dee0" : "#33383b")};
      span {
        color: ${(props) => (props.theme === "dark" ? "#96969e" : "#485157ce")};
        font-size: 13.7px;
        font-weight: 500;
        cursor: pointer;
      }
    }
  }
`;
