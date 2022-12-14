import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
export const NavWrapper = styled.nav`
  height: 40px;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .contactInfo {
    display: flex;
    align-items: center;
    gap: 12px;
    img {
      height: 40px;
      width: 40px;
      border-radius: 50%;
      object-fit: cover;
    }
    .displayName {
      font-size: 16px;
      font-weight: 500;
      color: #111b21d3;
      display: flex;
      flex-direction: column;
      .status-text {
        font-size: 14px;
        font-weight: 500;
        color: #555555dd;
      }
    }
  }
  .btnGroup {
    width: auto;
    display: flex;
    gap: 12px;
    .btn {
      color: #677780;
      height: 25px;
      width: 25px;
      cursor: pointer;
    }
  }
`;

export const ChatBoxContainer = styled.div`
  height: 100%;
  background-color: #1d2326;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 14px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-thumb {
    background: #9e9d99;
    
  }
`;

export const MessageWrapper = styled.div`
  .message {
    display: flex;
    .messageContent {
      max-width: 50%;
      flex-wrap: wrap;
      background-color: #ffffff;
      display: flex;
      align-items: center;
      gap: 24px;
      padding: 12px 20px;
      border-radius: 0 10px 10px 10px;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
      p {
        font-size: 14px;
        font-weight: 500;
      }
      span {
        font-size: 12px;
        color: #8f8f8f;
        position: relative;
        top: 5px;
      }
      &.owner {
        background-color: #f0d9ff;
      }
    }
    &.owner {
      flex-direction: row-reverse;
      .messageContent {
        background: #dcf8c6;
        border-radius: 10px 0 10px 10px;
        p {
          font-size: 14px;
          font-weight: 500;
        }
      }
    }
  }
`;

export const InputWrapper = styled.div`
  height: 40px;
  width: auto;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: 24px;
  .btnGroup {
    padding: 6px;
    display: flex;
    gap: 12px;
    .btn {
      color: #677780;
      height: 25px;
      width: 25px;
      cursor: pointer;
    }
  }
  .textGroup {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    gap: 24px;
    input {
      padding: 14px;
      width: 85%;
      border: none;
      border-radius: 8px;
      outline: none;
    }
    button {
      padding: 6px 16px;
      border: none;
      background-color: #128c7e;
      color: white;
      font-size: 18px;
      font-weight: 600;
      cursor: pointer;
    }
  }
`;
