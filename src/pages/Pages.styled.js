import styled from "styled-components";

/****************** Autentication Styles ********************/

export const FormWrapper = styled.div`
  width: 500px;
  height: 550px;
  display: flex;
  justify-content: center;
  position: absolute;
  padding: 26px 10px;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: #ffff;
  top: 68px;
  text-align: center;
  form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    padding: 0 60px;
    color: #78848c;
    .logo {
      font-size: 34px;
      font-weight: 300;
      &.register {
        font-size: 34px;
        font-weight: 300;
      }
    }

    span {
      font-size: 16px;
    }
    input {
      padding: 12px;
      border: none;
      border-bottom: 1px solid lightgray;
      outline: none;
      &:focus {
        border-bottom: 1px solid #128c7e;
        transition: ease 350ms;
      }
      &::placeholder {
        color: rgb(175, 175, 175);
      }
    }
    button {
      background-color: #128c7e;
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
      .switch {
        color: #78848c;
        text-decoration: none;
        font-weight: 500;
        &:hover {
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
  background: ${(props) => (props.theme === "dark" ? "#2a373f" : "#f0f2f5")};
  top: 20px;
  display: flex;
  @keyframes scaleIn {
    from {
      scale: 0;
    }
    to {
      scale: 1;
    }
  }
  animation: scaleIn 0.3s;

  @media (max-width: 1800px) {
    width: 98%;
  }
`;

// app component
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) =>
    props.theme === "dark" ? "#111b21" : "#e4e2de"};
  display: flex;
  justify-content: center;
  .background {
    width: 100%;
    height: 144px;
    background-color: ${(props) =>
    props.theme === "dark" ? "#111b21" : "#00a884"};
    position: absolute;
  }
`;
