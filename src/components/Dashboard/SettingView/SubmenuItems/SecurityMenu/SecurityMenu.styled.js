import styled from "styled-components";
import check from "..//..//..//..//..//assets/check.png";

// Securtiy Menu Styles

export const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  overflow: none;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;

  .iconWrapper {
    height: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    .icon {
      color: #ffffff;
      height: 60px;
      width: 60px;
      padding: 16px;
      border-radius: 50%;
      background-color: #686ba8;
    }
  }
  .contentWrapper {
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    h3 {
      font-weight: 600;
      color: #252525;
    }
    p {
      color: #485157ac;
      font-size: 13.3px;
      line-height: 22px;
      font-weight: 500;
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
      line-height: 40px;
      color: #8696a0;
      font-size: 13.3px;
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
      color: #383ea3;
      cursor: pointer;
    }
  }
  hr {
    width: 88%;
    align-self: center;
    opacity: 0.2;
    position: relative;
    top: 12px;
  }
  .selectionWrapper {
    padding: 48px 30px;
    display: flex;
    flex-direction: column;
    .checkbox {
      display: flex;
      align-items: center;
      gap: 18px;
      span {
        color: #252525;
        font-size: 16px;
      }
    }
    p {
      color: #8696a0;
      font-size: 13.4px;
      line-height: 20px;
      padding: 12px 34px;
      span {
        font-weight: 600;
        font-size: 13.4px;
        padding-top: 6px;
        color: #383ea3;
        cursor: pointer;
      }
    }
  }
`;

export const Label = styled.label`
  position: absolute;
  background: #ffffff;
  border: 2px solid #7d7d7e;
  border-radius: 2px;
  left: 30px;
  width: 16px;
  height: 16px;
`;
export const CheckBox = styled.input`
  opacity: -1;
  z-index: 1;
  cursor: pointer;
  width: 16px;
  height: 16px;
  &:hover ~ ${Label} {
    background: #ffffff;
    &::after {
      //content: url(${check});
      display: block;
      color: white;
      width: 16px;
      height: 16px;
    }
  }
  &:checked {
    border: 1px solid #34377a;
  }
  &:checked + ${Label} {
    background: #34377a;
    border: 1px solid #34377a;
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
