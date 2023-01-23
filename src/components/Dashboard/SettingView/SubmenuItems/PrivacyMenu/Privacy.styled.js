import styled from "styled-components";
import check from "..//..//..//..//..//assets/check.png";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => (props.theme === "dark" ? "#111b21" : "none")};
  .list{
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 7px;
    }
    &::-webkit-scrollbar-thumb {
      background: ${(props) =>
        props.theme === "dark" ? "#435058" : "#9e9d99"};
      border-radius: 2px;
    }
  .contentWrapper {
    display: flex;
    flex-direction: column;
    background-color: ${(props) =>
      props.theme === "dark" ? "#11191f" : "#ffff"};
    padding: 20px 30px;
    box-shadow: ${(props) =>
      props.theme === "dark"
        ? "none"
        : "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,rgba(0, 0, 0, 0.1) 0px 0px 1px 0px"};
    margin-bottom: 18px;
    .selection:nth-child(8) {
      padding: 28px 0px;
    }
    h5 {
      font-weight: 500;
      font-size: 13.4px;
      color: ${(props) => (props.theme === "dark" ? "#128C7E" : "#128C7E")};
      padding-bottom: 16px;
    }
    .selection {
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 14px 0;
      cursor: pointer;
      label {
        display: flex;
        flex-direction: column;
        font-size: 14.6px;
        line-height: 20px;
        cursor: pointer;
        color: ${(props) => (props.theme === "dark" ? "#d9dee0" : "#252525")};
        span {
          color: ${(props) =>
            props.theme === "dark" ? "#96969e" : "#485157ac"};
          font-size: 13.4px;
          font-weight: 500;
          cursor: pointer;
        }
      }
      .icon {
        height: 25px;
        width: 25px;
        color: ${(props) => (props.theme === "dark" ? "#aebac1" : "#252525a2")};
      }
    }
    hr {
      opacity: 0.2;
      border: 1px solid #dddddd45;
    }
  }
}
`;

export const Label = styled.label`
  position: absolute;
  background-color: ${(props) =>
    props.theme === "dark" ? "#111b21" : "#ffff"};
  border: ${(props) =>
    props.theme === "dark" ? "2px solid #d9dee0" : "2px solid #7d7d7e"};
  border-radius: 2px;
  left: 365px;
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
      props.theme === "dark" ? "2px solid #005c4b" : "2px solid #7d7d7e"};
  }
  &:checked + ${Label} {
    background: ${(props) => (props.theme === "dark" ? "#005c4b" : "#005c4b")};
    border: ${(props) =>
      props.theme === "dark" ? "2px solid #005c4b" : "2px solid #7d7d7e"};
    &::after {
      content: url(${check});
      position: relative;
      left: 2px;
      bottom: 4px;
      display: block;
      color: white;
      width: 16px;
      height: 16px;
    }
  }
`;
