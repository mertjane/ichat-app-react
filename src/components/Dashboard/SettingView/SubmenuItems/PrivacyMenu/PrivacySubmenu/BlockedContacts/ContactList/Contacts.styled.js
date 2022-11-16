import styled from "styled-components";
import avatar from "..//..//..//..//..//..//..//..//assets/user.png";

export const StyledList = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #ffff;
  .list-items {
    display: flex;
    align-items: center;
    padding: 10px 16px;
    border-bottom: 1px solid #dddd;
    cursor: pointer;
    &:hover {
      background-color: #dddd;
    }
    .user-avatar {
      box-sizing: border-box;
      height: 50px;
      width: 50px;
      border-radius: 50%;
      background-image: url(${avatar});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    .user-info {
      width: calc(100% - 65px);
      display: flex;
      padding: 0 18px;
      align-items: center;
      justify-content: space-between;
      .user {
        display: flex;
        flex-direction: column;
        cursor: pointer;
        span {
          color: #485157c7;
          font-size: 15px;
          font-weight: 500;
        }
      }
      .icon {
        color: #8a8989;
        height: 20px;
        width: 20px;
      }
    }
  }
`;
