import styled from "styled-components";
import check from "..//..//..//..//..//assets/check.png";

// Securtiy Menu Styles
export const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  overflow: none;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: ${(props) =>
    props.theme === "dark" ? "#111b21" : "#ffff"};
  .list-wrapper {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 7px;
    }
    &::-webkit-scrollbar-thumb {
      background: ${(props) =>
        props.theme === "dark" ? "#435058" : "#9e9d99"};
      border-radius: 2px;
    }
    .iconWrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 12px 0;
      .icon {
        color: #ffffff;
        height: 60px;
        width: 60px;
        padding: 16px;
        border-radius: 50%;
        background-color: ${(props) =>
          props.theme === "dark" ? "#07cd9e" : "#07cd9e"};
      }
    }
    .contentWrapper {
      padding: 0 30px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      h3 {
        font-weight: 600;
        color: ${(props) => (props.theme === "dark" ? "#d9dee0" : "#252525")};
        @media (max-width: 1800px) {
          font-size: 16px;
        }
      }
      p {
        color: ${(props) => (props.theme === "dark" ? "#8696a0" : "#485157ac")};
        font-size: 13.3px;
        line-height: 22px;
        font-weight: 500;
        @media (max-width: 1800px) {
          font-size: 13px;
        }
      }
    }
    .infoWrapper {
      display: flex;
      flex-direction: column;
      padding: 12px 30px;
      label {
        display: flex;
        align-items: center;
        gap: 10px;
        // line-height: 40px;
        padding-bottom: 12px;
        color: #8696a0;
        font-size: 13.3px;
        @media (max-width: 1800px) {
          font-size: 12.8px;
        }
        .icon {
          height: 22px;
          width: 22px;
          color: #8696a0;
        }
      }
      span {
        font-weight: 600;
        font-size: 14px;
        padding-top: 6px;
        color: #2199eb;
        cursor: pointer;
        @media (max-width: 1800px) {
          font-size: 12.4px;
        }
      }
    }
    hr {
      width: 88%;
      align-self: center;
      opacity: 0.2;
      position: relative;
      top: 12px;
      border: 1px solid #727272a6;
    }
    .selectionWrapper {
      padding: 40px 0;
      display: flex;
      flex-direction: column;
      .checkbox {
        display: flex;
        width: 100%;
        align-items: center;
        gap: 20px;
        box-sizing: border-box;
        position: relative;
        span {
          color: ${(props) => (props.theme === "dark" ? "#d9dee0" : "#252525")};
          font-size: 16px;
          display: flex;
          align-items: center;
          position: absolute;
          box-sizing: border-box;
          left: 70px;
          padding-right: 15px;
          @media (max-width: 1800px) {
            font-size: 14.5px;
            left: 67px;
          }
        }
      }
      p {
        color: ${(props) => (props.theme === "dark" ? "#8696a0" : "#8696a0")};
        font-size: 13.4px;
        line-height: 20px;
        padding: 12px 34px;

        @media (max-width: 1800px) {
          font-size: 12.8px;
        }
        span {
          font-weight: 500;
          font-size: 13.4px;
          padding-top: 6px;
          color: #2199eb;
          cursor: pointer;
          @media (max-width: 1800px) {
            font-size: 12.2px;
          }
        }
      }
    }
  }
`;

export const Label = styled.label`
  position: relative;
  background-color: ${(props) =>
    props.theme === "dark" ? "#111b21" : "#ffff"};
  border: ${(props) =>
    props.theme === "dark" ? "2px solid #7d7d7e" : "2px solid #7d7d7e"};
  border-radius: 2px;
  width: 16px;
  height: 16px;
`;
export const CheckBox = styled.input`
  opacity: -1;
  z-index: 1;
  cursor: pointer;
  width: 16px;
  height: 16px;
  left: 35px;
  position: relative;
  &::after {
    //content: url(${check});
    display: block;
    color: white;
    width: 16px;
    height: 16px;
  }
  &:checked {
    border: ${(props) =>
      props.theme === "dark" ? "2px solid #128C7E" : "2px solid #7d7d7e"};
  }
  &:checked + ${Label} {
    background: ${(props) => (props.theme === "dark" ? "#005c4b" : "#005c4b")};
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
