import styled from "styled-components";

export const ConversationWrapper = styled.div`
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #ffff;
  border-bottom: 1px solid lightgray;
  cursor: pointer;
  &:hover {
    background-color: #f0f2f5;
    &:active{
    background-color: #677780;
  }
    .chatTime {
      .optionBtn {
        visibility: visible;
      }
    }
  }
  img {
    height: 45px;
    width: 45px;
    border-radius: 50%;
    object-fit: cover;
  }
  .chatInfo {
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 1px 4px;
    span {
      font-size: 18px;
      font-weight: 500;
      color: #111b21d3;
    }
    p {
      font-size: 14px;
      color: #677780;
    }
  }
  .chatTime {
    padding: 1px 4px;
    span {
      font-size: 12px;
      color: #677780;
    }
    .optionBtn {
      color: #677780;
      cursor: pointer;
      position: relative;
      left: 26px;
      width: 25px;
      height: 25px;
      visibility: hidden;
    }
  }
`;
