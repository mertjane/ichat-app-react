import React from "react";
import DisplayName from "./DisplayName/DisplayName";
import DisplayAbout from "./DisplayAbout/DisplayAbout";
import { StyledStatus } from "./Profile.styled";

const StatusDisplay = () => {

  return (
    <StyledStatus>
      <DisplayName />
      <div className="infoWrapper">
        <span>
          This is not your username or key. This name is visible to your ichat
          contacts.
        </span>
      </div>
      <DisplayAbout/>
    </StyledStatus>
  );
};

export default StatusDisplay;
