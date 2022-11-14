import styled from "styled-components";
import logo from "../assets/chat.png";

/****************** Autentication Styles ********************/

export const FormWrapper = styled.div`
  width: 500px;
  height: 550px;
  display: flex;
  justify-content: center;
  position: absolute;
  padding: 14px 0 14px 0;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: #ffff;
  top: 68px;
  text-align: center;
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    padding: 20px 60px;
    color: #78848c;
    .logo {
      background-image: url(${logo});
      background-repeat: no-repeat;
      background-size: contain;
      width: 70px;
      height: 70px;
      align-self: center;
    }
    span {
      font-size: 16px;
    }
    input {
      padding: 12px;
      border: none;
      border-bottom: 1px solid lightgray;
      outline: none;
      &::placeholder {
        color: rgb(175, 175, 175);
      }
    }
    button {
      background-color: #ec255a;
      color: white;
      padding: 15px;
      font-size: large;
      font-weight: bold;
      border: none;
      cursor: pointer;
      margin-top: 10px;
      &:disabled {
        cursor: not-allowed;
      }
    }
    p {
      font-size: 14px;
      margin-top: 10px;
      .switch{
        color: #78848c;
        text-decoration: none;
        font-weight: 500;
        &:hover{
          text-decoration: underline;
        }
      }
    }
  }
`;

/************************ HOME STYLES *********************/

export const HomeWrapper = styled.div`
  width: 80%;
  height: 93%;
  position: absolute;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  background: #f0f2f5;
  top: 20px;
  display: flex;
`;
