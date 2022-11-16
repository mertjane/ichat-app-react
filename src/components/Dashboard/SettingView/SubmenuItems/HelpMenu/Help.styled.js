import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  .svgWrapper {
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 30px 0;
    div {
      border-radius: 50%;
      width: 240px;
      height: 240px;
    }
    span {
      color: #485157c7;
      font-size: 13.4px;
      font-weight: 500;
    }
  }
  .selection {
    background-color: #ffff;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    .icon-group {
      height: 60px;
      display: flex;
      align-items: center;
      gap: 24px;
      padding-left: 34px;
      &:hover {
        background-color: #eeecec;
      }
      &:nth-child(3) {
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
  }
`;
