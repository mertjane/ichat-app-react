import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #ffff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  .iconWrapper {
    padding: 30px 0 10px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .icon {
      color: #3e4192b9;
      height: 80px;
      width: 80px;
      padding: 16px;
      border-radius: 50%;
      background-color: #a7aad86f;
    }
    p {
      color: #485157ce;
      font-size: 13.4px;
      line-height: 22px;
      font-weight: 500;
      padding: 20px 30px;
      span {
        font-weight: 500;
        font-size: 13.4px;
        color: #3e4192;
      }
    }
  }
  .selection {
    padding: 20px 30px;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    &:hover {
      background-color: #eeecec;
    }
    .icon {
      color: #677780ae;
      height: 30px;
      width: 30px;
    }
  }
  .infoWrapper {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 30px 30px;
    p {
      color: #485157ce;
      font-size: 13.4px;
      line-height: 22px;
      font-weight: 500;
    }
  }
`;
