import styled from "styled-components";

// Contact component
export const Wrapper = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) =>
    props.theme === "dark" ? "#111b21" : "#ffff"};
`;

// Search component
export const SearchWrapper = styled.section`
  padding: 8px 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    padding: 10px;
    border: none;
    border-radius: 0 6px 6px 0;
    outline: none;
    background-color: ${(props) =>
      props.theme === "dark" ? "#2a373f" : "#f0f2f5"};
    color: ${(props) => (props.theme === "dark" ? "#d9dee0" : "#33383b")};
    ::placeholder {
      color: ${(props) => (props.theme === "dark" ? "#96969e" : "#677780")};
      font-weight: 500;
    }
    width: 85%;
  }
  .searcBtn {
    color: ${(props) => (props.theme === "dark" ? "#96969e" : "#677780")};
    cursor: pointer;
    border-radius: 6px 0 0 6px;
    background-color: ${(props) =>
      props.theme === "dark" ? "#2a373f" : "#f0f2f5"};
    padding: 9px;
    height: 20px;
    width: 20px;
  }
`;

// List component
export const ListWrapper = styled.section`
  height: calc(100% - 26px);
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) => (props.theme === "dark" ? "#435058" : "#9e9d99")};
    border-radius: 2px;
  }
  h4 {
    color: #292c6d;
    font-weight: 400;
    padding: 20px 30px;
    border-bottom: 1px solid #ddd;
  }
`;

// User component
export const UsersWrapper = styled.section`
  height: 75px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 14px;
  padding: 0 0 0 12px;
  cursor: pointer;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
    padding: 0 0 0 12px;
    width: 100%;
    height: 100%;
    color: ${(props) => (props.theme === "dark" ? "#d9dee0" : "#111b21d3")};
    border-bottom: ${(props) =>
      props.theme === "dark" ? "1px solid #ffffff22" : "1px solid #dddd"};
    span {
      font-size: 14px;
      color: ${(props) => (props.theme === "dark" ? "#96969e" : "#929191")};
    }
  }
`;
