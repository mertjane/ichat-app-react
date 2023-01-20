import React from "react";
import { useSelector } from "react-redux";
import Header from "..//..//..//..//Header";
import { Wrapper, Label, StyledRadio } from "./MsgDuration.styled";

const MsgDuration = () => {
  const { theme } = useSelector((state) => state.user.userInfo);
  return (
    <Wrapper theme={theme}>
      <Header />
      <div className="iconWrapper" />
      <div className="contentWrapper">
        <h5>Start new conversations with timed messages turn on</h5>
        <div className="selection">
          <StyledRadio theme={theme} name="lastSeen" type="radio" />
          <Label theme={theme} />
          <span>24 hours</span>
        </div>
        <div className="selection">
          <StyledRadio theme={theme} name="lastSeen" type="radio" />
          <Label theme={theme} />
          <span>7 days</span>
        </div>
        <div className="selection">
          <StyledRadio theme={theme} name="lastSeen" type="radio" />
          <Label theme={theme} />
          <span>90 days</span>
        </div>
        <div className="selection">
          <StyledRadio theme={theme} name="lastSeen" type="radio" />
          <Label theme={theme} />
          <span>Closed</span>
        </div>
        <span className="link">More information</span>
      </div>
    </Wrapper>
  );
};

export default MsgDuration;
