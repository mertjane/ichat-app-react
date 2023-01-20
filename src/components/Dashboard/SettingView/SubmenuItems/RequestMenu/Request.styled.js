import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) =>
    props.theme === "dark" ? "#111b21" : "#ffff"};
  box-shadow: ${(props) =>
    props.theme === "dark" ? "none" : "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"};
  .iconWrapper {
    padding: 30px 0 10px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .icon {
      color: #ffff;
      height: 80px;
      width: 80px;
      padding: 16px;
      border-radius: 50%;
      background-color: ${(props) =>
      props.theme === "dark" ? "#07cd9e" : "#07cd9e"};
    }
    p {
      color: ${(props) => (props.theme === "dark" ? "#96969e" : "#485157ce")};
      font-size: 13.4px;
      line-height: 22px;
      font-weight: 500;
      padding: 20px 30px;
      span {
        font-weight: 500;
        font-size: 13.4px;
        color: #2199EB;
      }
    }
  }
  .selection {
    padding: 20px 30px;
    border-top: ${(props) =>
      props.theme === "dark" ? "1px solid #ffffff22" : "1px solid #dddd"};
    border-bottom: ${(props) =>
      props.theme === "dark" ? "1px solid #ffffff22" : "1px solid #dddd"};
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    color: ${(props) => (props.theme === "dark" ? "#d9dee0" : "#33383b")};
    &:hover {
      background-color: ${(props) =>
      props.theme === "dark" ? "#ffffff22" : "#eeecec"};
    }
    .icon {
      color: ${(props) => (props.theme === "dark" ? "#8696a0" : "#677780ae")};
      height: 30px;
      width: 30px;
    }
  }
  .infoWrapper {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 30px 30px;
    p {
      color: ${(props) => (props.theme === "dark" ? "#96969e" : "#485157ce")};
      font-size: 13.4px;
      line-height: 22px;
      font-weight: 500;
    }
  }
`;
