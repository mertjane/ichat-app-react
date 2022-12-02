import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

export const AvatarWrapper = styled.section`
  height: 256px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
        color: #313131;
      }
      span {
        font-weight: 600;
        font-size: 12px;
        color: #313131;
      }
    }
  }
`;

export const StyledStatus = styled.section`
  display: flex;
  flex-direction: column;
  .infoWrapper {
    width: 100%;
    height: 86px;
    text-align: start;
    display: flex;
    span {
      padding: 20px 30px;
      font-size: 13px;
      color: #81919b;
    }
  }
`;
