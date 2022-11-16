import React from "react";
import Header from "..//..//..//..//Header";
import { Wrapper, Label, StyledRadio } from "./AboutMe.styled";

const AboutMe = () => {
  return (
    <Wrapper>
      <Header />
      <div className="contentWrapper">
        <h5>Who can see my profile photo</h5>
        <div className="selection">
          <StyledRadio name="lastSeen" type="radio" />
          <Label />
          <span>Everyone</span>
        </div>
        <div className="selection">
          <StyledRadio name="lastSeen" type="radio" />
          <Label />
          <span>My contacts</span>
        </div>
        <div className="selection">
          <StyledRadio name="lastSeen" type="radio" />
          <Label />
          <span>No one</span>
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutMe;
