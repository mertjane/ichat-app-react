import styled from "styled-components";

export const ConversationWrapper = styled.div`
  height: 65px;
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #ffff;
  overflow: hidden;
  padding: 4px 0 0 12px;
  cursor: pointer;
  &:hover {
    background-color: #f0f2f5;
    .wrapper {
      .chatTime {
        .optionBtn {
          visibility: visible;
        }
      }
    }
  }
  img {
    height: 45px;
    width: 45px;
    border-radius: 50%;
    object-fit: cover;
  }
  .wrapper {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    border-bottom: 1px solid #dddd;
    .chatInfo {
      width: 75%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 6px;
      gap: 2px;
      p {
        font-size: 16px;
        font-weight: 500;
        color: #111b21d3;
      }
      span {
        font-size: 13px;
        color: #677780;
      }
    }
    .chatTime {
      width: 25%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: center;
      padding-right: 8px;
      span {
        font-size: 12px;
        color: #677780;
      }
      .optionBtn {
        color: #677780;
        cursor: pointer;
        position: relative;
        width: 25px;
        height: 25px;
        visibility: hidden;
      }
    }
  }
`;
