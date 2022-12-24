import React from "react";
import styled from "styled-components";
import avatar from "..//..//..//..//..//..//..//..//..//assets/user.png";

export const StyledList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  padding: 8px 0;
  cursor: pointer;
  &:hover {
    background-color: #dddddda4;
  }
  .user-avatar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5px 15px;
    .avatar {
      height: 52px;
      width: 52px;
      border-radius: 50%;
      background-image: url(${avatar});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 8px 0;
    border-bottom: 1px solid #ddddddb0;
    label {
      display: flex;
      flex-direction: column;
      cursor: pointer;
      span {
        color: #485157ce;
        font-size: 13.7px;
        font-weight: 500;
        cursor: pointer;
      }
    }
  }
`;

const User = () => {
  return (
    <StyledList>
      <div className="user-avatar">
        <div className="avatar" />
      </div>
      <div className="user-info">
        <label>
          Username
          <span>status</span>
        </label>
      </div>
    </StyledList>
  );
};

export default User;
