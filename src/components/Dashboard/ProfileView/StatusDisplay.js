import React from "react";
import { PersonalWrapper, InfoWrapper, StatusWrapper } from "./Profile.styled";
import { MdEdit } from "react-icons/md";

const StatusDisplay = () => {
  return (
    <>
      <PersonalWrapper>
        <p>Your name</p>
        <div>
          <span>Display name</span>
          <MdEdit className="btn" />
        </div>
      </PersonalWrapper>
      <InfoWrapper>
        <span>
          This is not your username or key. This name is visible to your ichat
          contacts.
        </span>
      </InfoWrapper>
      <StatusWrapper>
        <p>About me</p>
        <div>
          <span>available</span>
          <MdEdit className="btn" />
        </div>
      </StatusWrapper>
    </>
  );
};

export default StatusDisplay;
