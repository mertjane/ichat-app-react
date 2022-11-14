import React from "react";
import { ContentWrapper } from "./Settings.styled";
import profileIMG from "..//..//..//assets/man.png"
import {useNavigate} from "react-router-dom"

const Avatar = () => {
  const navigate = useNavigate();
  return (
    <>
      <ContentWrapper onClick={() => navigate("/profile")}>
        <div className="avatar">
            <img src={profileIMG} alt="avatar" />
        </div>
        <div className="user-status">
          <p>Display name</p>
          <span>Available</span>
        </div>
      </ContentWrapper>
    </>
  );
};

export default Avatar;
