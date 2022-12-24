import styled from "styled-components";

export const Overlay = styled.section`
  background-color: #f8f8f89b;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 998;
  .modalWrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 430px;
    height: 700px;
    border-radius: 3px;
    position: absolute;
    background-color: #ffff;
    top: 10%;
    left: 35%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    z-index: 999;
    .header {
      height: 70px;
      background-color: #075E54;
      border-radius: 3px 3px 0 0;
      display: flex;
      align-items: center;
      padding: 0 20px;
      gap: 26px;
      .icon {
        color: #dddd;
        height: 25px;
        width: 25px;
        cursor: pointer;
      }
      h3 {
        color: #ffff;
        font-weight: 600;
      }
    }
    .searchWrapper {
      display: flex;
      height: 36px;
      align-items: center;
      padding: 10px 15px;
      .searchBtn {
        color: #464d52;
        cursor: pointer;
        border-radius: 8px 0 0 8px;
        background-color: #dddddd90;
        height: 38px;
        width: 22px;
        padding-left: 16px;
      }
      input {
        width: 100%;
        height: 100%;
        border-radius: 0 8px 8px 0;
        outline: none;
        border: none;
        padding-left: 18px;
        background-color: #dddddd90;
      }
    }
    .userList {
      display: flex;
      flex-direction: column;
      max-height: calc(100% - 116px);
      overflow-y: auto;
      &::-webkit-scrollbar {
        width: 7px;
      }
      &::-webkit-scrollbar-thumb {
        background: #969595a2;
        border-radius: 2px;
      }
    }
  }
`;
