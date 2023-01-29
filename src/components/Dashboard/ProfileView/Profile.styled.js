import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex; 
  flex-direction: column;
  box-sizing: border-box;
  background-color: ${(props) =>
    props.theme === "dark" ? "#111b21" : "none"};
`;

export const AvatarWrapper = styled.section`
  height: 256px;
  width: 100%;
  display: flex; 
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.theme === "dark" ? "#111b21" : "#ffff"};
  .avatar {
    height: 190px;
    width: 200px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    position: relative;
    @keyframes scaleIn {
      from {
        opacity: 0;
        scale: 0;
      }
      to {
        opacity: 1;
        scale: 1;
      }
    }
    animation: scaleIn 1s;
    img {
      height: 190px;
      width: 200px;
      position: absolute;
      border-radius: 50%;
      &:hover {
        opacity: 0.6;
        filter: blur(1px);
      }
    }
    label {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
      width: 140px;
      text-align: center;
      top: 70px;
      left: 30px;
      cursor: pointer;
      input{
        position: absolute;
        visibility: hidden;
      }
      .btn {
        width: 30px;
        height: 30px;
        color: #ffff;
      }
      span {
        font-weight: 600;
        font-size: 12px;
        color: #ffff;
      }
    }
  }
`;

// DisplayName JSX
export const NameWrapper = styled.div`
  width: 100%;
  height: 106px;
  background-color: ${(props) =>
    props.theme === "dark" ? "#111b21" : "#ffff"};
  box-shadow: ${(props) =>
    props.theme === "dark" ? "none" : "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"} ;
  display: flex;
  flex-direction: column;
  p {
    flex: 1;
    display: flex;
    align-items: center;
    color: ${(props) => (props.theme === "dark" ? "#128C7E" : "#485157")};
    font-size: 13px;
    font-weight: 600;
    padding: 0 30px;
  }
  div {
    flex: 1;
    display: flex;
    align-items: flex-start;
    padding: 0 30px;
    justify-content: space-between;
    .editName {
      width: 100%;
      height: 75%;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      box-sizing: border-box;
      padding: 0;
      border-bottom: 2px solid #128C7E;
      input {
        height: 75%;
        width: 60%;
        font-size: 16px;
        outline: none;
        border: none;
        color: ${(props) => (props.theme === "dark" ? "#d9dee0" : "#33383b")};
        background-color: ${(props) =>
          props.theme === "dark" ? "#111b21" : "transparent"};
      }
      label {
        color: ${(props) => (props.theme === "dark" ? "#aebac1" : "#c9c8c8")};
        font-size: 14px;
        display: flex;
        align-items: center;
        gap: 8px;
        .icon {
          color: ${(props) => (props.theme === "dark" ? "#aebac1" : "#b3b3b3")};
          height: 18px;
          width: 18px;
          cursor: pointer;
        }
        .checkIcon {
          color: #7e7d7d;
          height: 24px;
          width: 24px;
          cursor: pointer;
        }
      }
    }
    .btn {
      height: 26px;
      width: 26px;
      color: ${(props) => (props.theme === "dark" ? "#aebac1" : "#81919b")};
      cursor: pointer;
    }
  }
  span{
    color: ${(props) => (props.theme === "dark" ? "#d4d3d3" : "#677780")};
  }
`;

// DisplayAbout JSX
export const AboutWrapper = styled.div`
  width: 100%;
  height: 106px;
  background-color: ${(props) =>
    props.theme === "dark" ? "#111b21" : "#ffff"};
  box-shadow: ${(props) =>
    props.theme === "dark" ? "none" : "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"} ;
  display: flex;
  flex-direction: column;
  p {
    flex: 1;
    display: flex;
    align-items: center;
    color: ${(props) => (props.theme === "dark" ? "#128C7E" : "#485157")};
    font-size: 13px;
    font-weight: 600;
    padding: 0 30px;
  }
  div {
    flex: 1;
    display: flex;
    align-items: flex-start;
    padding: 0 30px;
    justify-content: space-between;
    .editAbout {
      width: 100%;
      height: 75%;
      display: flex;
      align-items: flex-start;
      box-sizing: border-box;
      padding: 0;
      border-bottom: 2px solid #128C7E;
      input {
        height: 75%;
        width: 60%;
        font-size: 16px;
        outline: none;
        border: none;
        color: ${(props) => (props.theme === "dark" ? "#d9dee0" : "#33383b")};
        background-color: ${(props) =>
          props.theme === "dark" ? "#111b21" : "transparent"};
      }
      label {
        color: #c9c8c8;
        font-size: 14px;
        display: flex;
        align-items: center;
        gap: 8px;
        .icon {
          color: ${(props) => (props.theme === "dark" ? "#aebac1" : "#b3b3b3")};
          height: 18px;
          width: 18px;
          cursor: pointer;
        }
        .checkIcon {
          color: #7e7d7d;
          height: 24px;
          width: 24px;
          cursor: pointer;
        }
      }
    }
    .btn {
      height: 26px;
      width: 26px;
      color: ${(props) => (props.theme === "dark" ? "#aebac1" : "#81919b")};
      cursor: pointer;
    }
  }
  span{
    color: ${(props) => (props.theme === "dark" ? "#d4d3d3" : "#677780")};
  }
`;


// Index JSX
export const StyledStatus = styled.section`
  display: flex;
  flex-direction: column;
  .infoWrapper {
    width: 100%;
    height: 86px;
    text-align: start;
    display: flex;
    background-color: ${(props) =>
    props.theme === "dark" ? "#111b21" : "#ffff"};
    span {
      padding: 20px 30px;
      font-size: 13px;
      color: ${(props) => (props.theme === "dark" ? "#96969e" : "#81919b")};
    }
  }
`;
