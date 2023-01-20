import React from "react";
import { ContentWrapper } from "./Settings.styled";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Avatar = () => {
  const navigate = useNavigate();
  const { avatar } = useSelector((state) => state.user.userInfo);
  const { theme } = useSelector((state) => state.user.userInfo);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <ContentWrapper theme={theme} onClick={() => navigate("/profile")}>
      <div className="avatar">
        <img src={avatar ? PF + avatar : PF + "user.png"} alt="avatar" />
      </div>
      <div className="user-status">
        <p>Display name</p>
        <span>Available</span>
      </div>
    </ContentWrapper>
  );
};

export default Avatar;
