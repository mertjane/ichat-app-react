import styled from "styled-components";
import mockup from "..//..//..//..//..//..//..//assets/mockup.png";
import customRadio from "..//..//..//..//..//..//../assets/custom_radio.png";

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #ffff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
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
      color: #3b3e86;
      padding-bottom: 15px;
    }
    .selection {
      display: flex;
      align-items: center;
      padding: 20px 0;
      gap: 22px;
      span {
        color: #485157;
        font-size: 15px;
        font-weight: 500;
      }
    }
    .link {
      font-weight: 600;
      font-size: 14px;
      color: #383ea3;
      cursor: pointer;
      padding: 26px 0;
    }
  }
`;

export const Label = styled.label`
  position: absolute;
  background: #ffffff;
  border: 2px solid #bebdbd;
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
  &:hover ~ ${Label} {
    background: #ffffff;
    &::after {
      display: block;
      color: white;
      width: 18px;
      height: 18px;
    }
  }
  &:checked {
    border: 2px solid #3b3e86;
  }
  &:checked + ${Label} {
    border: 2px solid #3b3e86;
    &::after {
      content: url(${customRadio});
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
