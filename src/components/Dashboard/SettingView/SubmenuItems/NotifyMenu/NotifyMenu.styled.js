import styled from "styled-components";
import check from "..//..//..//..//..//assets/check.png";

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const MsgWrap = styled.section`
  width: 100%;
  height: 152px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) =>
    props.theme === "dark" ? "#111b21" : "#ffff"};
  box-shadow: ${(props) =>
    props.theme === "dark" ? "none" : "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"} ;
  .contentWrapper {
    flex: 1;
    display: flex;
    align-items: center;
    padding: 0 30px;
    color: ${(props) => (props.theme === "dark" ? "#128C7E" : "#128C7E")};
    font-size: 15px;
    font-weight: 500;
  }
  .checkboxWrapper {
    flex: 2;
    display: flex;
    align-items: center;
    padding-right: 20px;
    p {
      width: 65%;
      display: flex;
      flex-direction: column;
      color: ${(props) => (props.theme === "dark" ? "#d9dee0" : "#252525")};
      font-size: 15px;
      padding: 30px 30px;
      gap: 2px;
      span {
        color: ${(props) => (props.theme === "dark" ? "#96969e" : "#485157ac")};
        font-size: 13.4px;
        font-weight: 500;
      }
    }
  }
`;
export const Label = styled.label`
  position: relative;
  background-color: ${(props) =>
    props.theme === "dark" ? "#111b21" : "#ffff"};
  border: ${(props) => (props.theme === "dark" ? "2px solid #d9dee0" : "2px solid #7d7d7e")}; 
  border-radius: 2px;
  left: 4px;
  width: 16px;
  height: 16px;
`;
export const CheckBox = styled.input`
  opacity: -1;
  z-index: 1;
  cursor: pointer;
  width: 16px;
  height: 16px;
  position: relative;
  left: 22px;
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
export const SoundWrap = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${(props) =>
    props.theme === "dark" ? "#111b21" : "#ffff"};
  box-shadow: ${(props) =>
    props.theme === "dark" ? "none" : "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"} ;
  margin-top: 12px;
  .checkboxWrapper {
    height: 100%;
    flex: 2;
    display: flex;
    align-items: center;
    padding-right: 20px;
    p {
      width: 65%;
      display: flex;
      flex-direction: column;
      color: ${(props) => (props.theme === "dark" ? "#d9dee0" : "#252525")};
      font-size: 15px;
      padding: 30px 30px;
      gap: 2px;
      span {
        color: ${(props) => (props.theme === "dark" ? "#96969e" : "#485157ac")};
        font-size: 13.4px;
        font-weight: 500;
      }
    }
  }
`;
