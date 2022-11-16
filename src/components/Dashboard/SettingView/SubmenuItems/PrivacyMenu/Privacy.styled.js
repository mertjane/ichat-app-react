import styled from "styled-components";
import check from "..//..//..//..//..//assets/check.png";

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  .contentWrapper {
    display: flex;
    flex-direction: column;
    background-color: #ffff;
    padding: 20px 30px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
      rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    margin-bottom: 18px;
    h5 {
      font-weight: 500;
      font-size: 13.4px;
      color: #3b3e86;
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
        span {
          color: #485157ac;
          font-size: 13.4px;
          font-weight: 500;
          cursor: pointer;
        }
      }
      .icon {
        height: 25px;
        width: 25px;
        color: #252525a2;
      }
    }
    hr {
      opacity: 0.2;
    }
  }
`;

export const Label = styled.label`
  position: absolute;
  background: #ffffff;
  border: 2px solid #7d7d7e;
  border-radius: 2px;
  left: 458px;
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
      bottom: 4px;
      display: block;
      color: white;
      width: 16px;
      height: 16px;
    }
  }
`;
