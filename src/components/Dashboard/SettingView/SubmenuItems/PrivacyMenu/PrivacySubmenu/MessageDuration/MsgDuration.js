import React from "react";
import Header from "..//..//..//..//Header";
import { Wrapper, Label, StyledRadio } from "./MsgDuration.styled";

const MsgDuration = () => {
  return (
    <Wrapper>
      <Header />
      <div className="iconWrapper" />
      <div className="contentWrapper">
        <h5>Start new conversations with timed messages turn on</h5>
        <div className="selection">
          <StyledRadio name="lastSeen" type="radio" />
          <Label />
          <span>24 hours</span>
        </div>
        <div className="selection">
          <StyledRadio name="lastSeen" type="radio" />
          <Label />
          <span>7 days</span>
        </div>
        <div className="selection">
          <StyledRadio name="lastSeen" type="radio" />
          <Label />
          <span>90 days</span>
        </div>
        <div className="selection">
          <StyledRadio name="lastSeen" type="radio" />
          <Label />
          <span>Closed</span>
        </div>
        <span className="link">More information</span>
      </div>
    </Wrapper>
  );
};

export default MsgDuration;
