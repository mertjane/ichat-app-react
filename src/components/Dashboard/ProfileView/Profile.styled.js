import styled from "styled-components";

export const Wrapper = styled.section`
  height: 256px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .avatar {
    height: 190px;
    width: 200px;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
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
    div {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
      width: 140px;
      text-align: center;
      top: 70px;
      left: 30px;
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

export const PersonalWrapper = styled.section`
  width: 100%;
  height: 106px;
  background-color: #ffffff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  flex-direction: column;
  p {
    flex: 1;
    display: flex;
    align-items: center;
    color: #485157;
    font-size: 13px;
    padding: 0 30px;
  }
  div {
    flex: 1;
    display: flex;
    align-items: flex-start;
    padding: 0 30px;
    justify-content: space-between;
    
    .btn {
      height: 26px;
      width: 26px;
      color: #81919b;
      cursor: pointer;
    }
  }
`;

export const InfoWrapper = styled.section`
    width: 100%;
    height: 86px;
    text-align: start;
    display: flex;
    span{
        padding: 20px 30px;
        font-size: 13px;
        color: #81919b;
    }
`


export const StatusWrapper = styled.section`
  width: 100%;
  height: 106px;
  background-color: #ffffff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  flex-direction: column;
  p {
    flex: 1;
    display: flex;
    align-items: center;
    color: #485157;
    font-size: 13px;
    padding: 0 30px;
  }
  div {
    flex: 1;
    display: flex;
    align-items: flex-start;
    padding: 0 30px;
    justify-content: space-between;
    
    .btn {
      height: 26px;
      width: 26px;
      color: #81919b;
      cursor: pointer;
    }
  }
`;
