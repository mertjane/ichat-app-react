import styled from "styled-components";
import mockup from "..//..//..//..//..//..//..//assets/mockup.png";
import customRadio from "..//..//..//..//..//..//../assets/custom_radio.png";

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) =>
    props.theme === "dark" ? "#111b21" : "#ffff"}; 
  box-shadow: ${(props) =>
      props.theme === "dark"
        ? "none"
        : "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,rgba(0, 0, 0, 0.1) 0px 0px 1px 0px"};
  .iconWrapper {
    width: 200px;
    height: 200px;
    display: flex;
    align-self: center;
    background-image: url(${mockup});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    padding: 15px 0;
  }
  .contentWrapper {
    display: flex;
    flex-direction: column;
    padding: 20px 30px;
    h5 {
      font-weight: 500;
      font-size: 13.4px;
      color: ${(props) => (props.theme === "dark" ? "#128C7E" : "#128C7E")};
      padding-bottom: 15px;
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
    .link {
      font-weight: 500;
      font-size: 13.8px;
      color: ${(props) => (props.theme === "dark" ? "#2092df" : "#2092df")};
      cursor: pointer;
      padding: 26px 0;
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
