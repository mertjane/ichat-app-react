import React from "react";
import { ContentWrapper } from "./Settings.styled";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Avatar = () => {
  const navigate = useNavigate();
  const { avatar } = useSelector((state) => state.user.userInfo);
  const { theme } = useSelector((state) => state.user.userInfo);
  const { name, about } = useSelector((state) => state.user.userInfo);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <ContentWrapper theme={theme} onClick={() => navigate("/profile")}>
      <div className="avatar">
        <img src={avatar ? PF + avatar : PF + "default.png"} alt="avatar" />
      </div>
      <div className="user-status">
        <p>{name}</p>
        <span>{about}</span>
      </div>
    </ContentWrapper>
  );
};

export default Avatar;
