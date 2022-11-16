import styled from "styled-components";
import check from "..//..//..//..//..//assets/check.png";

export const Wrapper = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const MsgWrap = styled.section`
  width: 100%;
  height: 152px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  .contentWrapper {
    flex: 1;
    display: flex;
    align-items: center;
    padding: 0 30px;
    color: #1b1e49;
    font-size: 15px;
    font-weight: 500;
  }
  .checkboxWrapper {
    flex: 2;
    display: flex;
    align-items: center;
    padding-right: 30px;
    p {
      width: 100%;
      display: flex;
      flex-direction: column;
      color: #252525;
      font-size: 15px;
      padding: 30px 30px;
      gap: 2px;
      span {
        color: #485157ac;
        font-size: 13.4px;
        font-weight: 500;
      }
    }
  }
`;
export const Label = styled.label`
  position: absolute;
  background: #ffffff;
  border: 2px solid #7d7d7e;
  border-radius: 2px;
  left: 467px;
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
export const SoundWrap = styled.section`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  margin-top: 12px;
  .checkboxWrapper {
    flex: 2;
    display: flex;
    align-items: center;
    padding-right: 30px;
    p {
      width: 100%;
      display: flex;
      flex-direction: column;
      color: #252525;
      font-size: 15px;
      padding: 30px 30px;
      gap: 2px;
      span {
        color: #485157ac;
        font-size: 13.4px;
        font-weight: 500;
      }
    }
  }
`;
