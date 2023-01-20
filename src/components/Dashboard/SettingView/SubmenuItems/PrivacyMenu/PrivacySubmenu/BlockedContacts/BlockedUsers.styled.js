import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  .contentWrapper {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 18px 30px;
    cursor: pointer;
    color: ${(props) => (props.theme === "dark" ? "#d9dee0" : "#33383b")};
    background-color: ${(props) =>
    props.theme === "dark" ? "#111b21" : "#ffff"}; 
    border-bottom: ${(props) =>
      props.theme === "dark" ? "1px solid #96969632" : "1px solid #dddd"};
    &:hover {
      background-color: ${(props) =>
      props.theme === "dark" ? "#2a373f" : "#dddd"};
    }
    .icon {
      color: ${(props) => (props.theme === "dark" ? "#8696a0" : "#677780")};
      height: 24px;
      width: 24px;
    }
  }
  .listWrapper {
    overflow: auto;
    max-height: 585px;
    background-color: ${(props) =>
      props.theme === "dark" ? "#111b29" : "#ffff"};
    &::-webkit-scrollbar {
      width: 7px;
    }
    &::-webkit-scrollbar-thumb {
      background: #969595a2;
      border-radius: 2px;
    }
  }
  .infoWrapper {
    height: 100px;
    padding: 16px 30px;
    span {
      color: ${(props) => (props.theme === "dark" ? "#96969e" : "#949292dd")};
      font-size: 13.4px;
      font-weight: 500;
    }
  }
`;
