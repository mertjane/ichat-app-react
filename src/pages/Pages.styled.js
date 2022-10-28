import styled from "styled-components";

/****************** Autentication Styles ********************/

export const FormWrapper = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: center;
  position: absolute;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: #ffff;
  top: 140px;
  text-align: center;
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 20px 60px;
    color: #78848c;
    .logo {
      color: #00a884;
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
      background-color: #00a884;
      color: white;
      padding: 15px;
      font-size: large;
      font-weight: bold;
      border: none;
      cursor: pointer;
      margin-top: 10px;
    }
    p{
        font-size: 12px;
        margin-top: 10px;
    }
  }
`;

  /************************ HOME STYLES *********************/

export const HomeWrapper = styled.div`
   width: 80%;
   height: 93%;
   position: absolute;
   box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
   background: #f0f2f5;
   top: 20px;
   display: flex;
 `;
