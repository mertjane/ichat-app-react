import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

// Header Component
export const HeaderWrapper = styled.section`
  width: 100%;
  height: 124px;
  background-color: #075E54;
  display: flex;
  align-items: flex-end;
  color: #ffff;
  div {
    display: flex;
    align-items: center;
    padding: 18px 32px;
    gap: 30px;
    .btn {
      cursor: pointer;
      height: 20px;
      width: 20px;
    }
    h2 {
      font-weight: 500;
      font-size: 20px;
      letter-spacing: 1px;
    }
  }
`;

// Avatar Component

export const ContentWrapper = styled.section`
  border: 1px solid black;
  width: 100%;
  height: 124px;
  display: flex;
  cursor: pointer;
  background-color: #ffffff;
  &:hover {
    background-color: #f8f7f7;
  }
  .avatar {
    flex: 0.8;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      border-radius: 50%;
      width: 65%;
      height: 65%;
      object-fit: cover;
      animation: fadeIn 0.1s;
    }
  }
  .user-status {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
    padding-left: 2px;
    p {
      font-weight: 400;
      font-size: 20px;
      color: #33383b;
    }
    span {
      font-size: 15px;
      color: #5a6369;
    }
  }
`;

// List Component
export const MenuWrapper = styled.section`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 248px);
  .icon-group {
    height: 60px;
    display: flex;
    align-items: center;
    gap: 24px;
    padding-left: 34px;
    &:hover {
      background-color: #eeecec;
    }
    &:nth-child(7) {
      li {
        border: none;
      }
    }
    .icon {
      color: #677780;
      height: 30px;
      width: 30px;
    }
    li {
      color: #33383b;
      display: flex;
      width: 100%;
      height: 60px;
      align-items: center;
      padding: 4px 4px;
      box-sizing: border-box;
      cursor: pointer;
      list-style: none;
      border-bottom: 1px solid #eeecec;
    }
  }
`;
