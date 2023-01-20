import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  .svgWrapper {
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 30px 0;
    div {
      border-radius: 50%;
      width: 240px;
      height: 240px;
    }
    span {
      color: ${(props) => (props.theme === "dark" ? "#96969e" : "#485157c7")};
      font-size: 13.4px;
      font-weight: 500;
    }
  }
  .selection {
    background-color: ${(props) =>
      props.theme === "dark" ? "#111b21" : "#ffff"};
    box-shadow: ${(props) =>
      props.theme === "dark"
        ? "none"
        : "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"};
    .icon-group {
      height: 60px;
      display: flex;
      align-items: center;
      gap: 24px;
      padding-left: 34px;
      &:hover {
        background-color: ${(props) =>
          props.theme === "dark" ? "#2a373f" : "#eeecec"};
      }
      &:nth-child(3) {
        li {
          border: none;
        }
      }
      .icon {
        color: ${(props) => (props.theme === "dark" ? "#8696a0" : "#677780")};
        height: 30px;
        width: 30px;
      }
      li {
        color: ${(props) => (props.theme === "dark" ? "#d9dee0" : "#33383b")};
        display: flex;
        width: 100%;
        height: 60px;
        align-items: center;
        padding: 4px 4px;
        box-sizing: border-box;
        cursor: pointer;
        list-style: none;
        border-bottom: ${(props) =>
          props.theme === "dark" ? "1px solid #ffffff22" : "1px solid #eeecec"};
      }
    }
  }
`;
