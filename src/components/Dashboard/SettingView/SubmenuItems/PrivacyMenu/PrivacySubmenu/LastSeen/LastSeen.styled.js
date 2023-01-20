import styled from "styled-components";
import customRadio from "..//..//..//..//..//..//../assets/custom_radio.png";
//import customRadioDark from "../../../../../../../assets/customRadioDark.png"

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  .contentWrapper {
    display: flex;
    flex-direction: column;
    background-color: ${(props) =>
    props.theme === "dark" ? "#111b21" : "#ffff"}; 
    padding: 20px 30px;
    box-shadow: ${(props) =>
      props.theme === "dark"
        ? "none"
        : "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,rgba(0, 0, 0, 0.1) 0px 0px 1px 0px"};
    h5 {
      font-weight: 500;
      font-size: 15.4px;
      color: ${(props) => (props.theme === "dark" ? "#128C7E" : "#128C7E")};
      padding-bottom: 16px;
    }
    .selection {
      display: flex;
      align-items: center;
      padding: 20px 0;
      gap: 22px;
      span {
        color: ${(props) => (props.theme === "dark" ? "#96969e" : "#485157")};
        font-size: 15px;
        font-weight: 500;
      }
    }
    hr {
      margin: 30px 0;
      opacity: 0.3;
    }
    .note {
      color: ${(props) => (props.theme === "dark" ? "#7d7d85" : "#485157")};
      font-size: 12px;
      font-weight: 500;
      padding: 24px 0;
    }
  }
`;

export const Label = styled.label`
  position: absolute;
  background-color: ${(props) =>
    props.theme === "dark" ? "#111b21" : "#ffff"};
  border: ${(props) =>
    props.theme === "dark" ? "2px solid #7d7d7e" : "2px solid #7d7d7e"};
  border-radius: 50%;
  width: 17px;
  height: 17px;
`;

export const StyledRadio = styled.input`
  opacity: -1;
  z-index: 1;
  cursor: pointer;
  width: 18px;
  height: 18px;
  &::after {
    display: block;
    color: white;
    width: 18px;
    height: 18px;
  }
  &:checked {
    border: ${(props) =>
      props.theme === "dark" ? "2px solid #128C7E" : "2px solid #7d7d7e"};
  }
  &:checked + ${Label} {
    border: ${(props) =>
      props.theme === "dark" ? "2px solid #128C7E" : "2px solid #128C7E"};
    &::after {
      // content: url(${customRadio});
      content: ${(props) =>
        props.theme === "dark" ? `url(${customRadio})` : `url(${customRadio})`};
      position: relative;
      left: 2.4px;
      bottom: 1.5px;
      display: block;
      color: white;
      width: 18px;
      height: 18px;
    }
  }
`;
