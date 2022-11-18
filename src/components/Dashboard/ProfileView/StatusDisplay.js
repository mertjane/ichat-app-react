import React from "react";
import { StyledStatus } from "./Profile.styled";
import { MdEdit } from "react-icons/md";

const StatusDisplay = () => {
  return (
    <StyledStatus>
      <div className="personalWrapper">
        <p>Your name</p>
        <div>
          <span>Display name</span>
          <MdEdit className="btn" />
        </div>
      </div>
      <div className="infoWrapper">
        <span>
          This is not your username or key. This name is visible to your ichat
          contacts.
        </span>
      </div>
      <div className="statusWrapper">
        <p>About me</p>
        <div>
          <span>available</span>
          <MdEdit className="btn" />
        </div>
      </div>
    </StyledStatus>
  );
};

export default StatusDisplay;
