import styled from "styled-components";
import avatar from "..//..//..//..//..//..//..//..//assets/user.png";

export const StyledList = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) =>
    props.theme === "dark" ? "#111b21" : "#ffff"}; 
  .list-items {
    display: flex;
    align-items: center;
    padding: 10px 16px;
    border-bottom: ${(props) =>
      props.theme === "dark" ? "1px solid #96969632" : "1px solid #dddd"};
    cursor: pointer;
    &:hover {
      background-color: ${(props) =>
      props.theme === "dark" ? "#2a373f" : "#dddd"};
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
        color: ${(props) => (props.theme === "dark" ? "#d9dee0" : "#33383b")};
        span {
          color: ${(props) => (props.theme === "dark" ? "#96969e" : "#485157c7")};
          font-size: 15px;
          font-weight: 500;
        }
      }
      .icon {
        color: ${(props) => (props.theme === "dark" ? "#8696a0" : "#8a8989")};
        height: 20px;
        width: 20px;
      }
    }
  }
`;
