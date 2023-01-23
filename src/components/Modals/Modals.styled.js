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
    width: 450px;
    height: 640px;
    border-radius: 6px;
    position: absolute;
    background-color: ${(props) =>
      props.theme === "dark" ? "#111b21" : "#ffff"};
    top: 16%;
    left: 36%;
    box-shadow: ${(props) =>
      props.theme === "dark" ? "none" : "rgba(0, 0, 0, 0.24) 0px 3px 8px"};
    .header {
      display: flex;
      align-items: center;
      padding: 20px 30px;
      background-color: ${(props) =>
        props.theme === "dark" ? "#2a373f" : "#075E54"};
      border-radius: 6px 6px 0 0;
      gap: 36px;
      .btn {
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
  }
`;

export const SearchWrapper = styled.div`
  padding: 8px 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    padding: 10px;
    border: none;
    border-radius: 0 6px 6px 0;
    outline: none;
    color: ${(props) => (props.theme === "dark" ? "#d9dee0" : "#33383b")};
    background-color: ${(props) =>
      props.theme === "dark" ? "#2a373f" : "#f0f2f5"};
    width: 85%;
    ::placeholder {
      color: ${(props) => (props.theme === "dark" ? "#96969e" : "#677780")};
      font-weight: 500;
    }
  }
  .searcBtn {
    color: ${(props) => (props.theme === "dark" ? "#8696a0" : "#505355")};
    cursor: pointer;
    border-radius: 6px 0 0 6px;
    background-color: ${(props) =>
      props.theme === "dark" ? "#2a373f" : "#f0f2f5"};
    padding: 9px;
    height: 20px;
    width: 20px;
  }
`;

export const ListWrapper = styled.div`
  height: calc(100% - 119px);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) =>
          props.theme === "dark" ? "#435058" : "#9e9d99"};
    border-radius: 2px;
  }
`;

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 14px;
  padding: 0 0 0 12px;
  height: 75px;
  &:hover {
    background-color: ${(props) =>
      props.theme === "dark" ? "#2a373f" : "#f0f2f5"};
  }
  img {
    height: 60px;
    width: 60px;
    border-radius: 50%;
    object-fit: cover;
  }
  .user-info {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => (props.theme === "dark" ? "#d9dee0" : "#33383b")};
    border-bottom: ${(props) =>
      props.theme === "dark" ? "1px solid #a7a5a531" : "1px solid #ddd"};
    width: 100%;
    height: 100%;
    padding: 0 12px 0 0;
    box-sizing: border-box;
    .addBtn {
      outline: none;
      border: none;
      display: flex;
      align-items: center;
      border-radius: 50%;
      cursor: pointer;
      margin-right: 12px;
      background-color: transparent;
      .icon {
        padding: 8px;
        height: 30px;
        width: 30px;
        color: #858585;
        &:hover {
          color: #85858578;
        }
      }
    }
  }
`;
