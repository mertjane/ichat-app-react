import React from "react";
import Header from "..//..//..//..//Header";
import { Wrapper, Label, StyledRadio } from "./LastSeen.styled";

const LastSeen = () => {
  return (
    <Wrapper>
      <Header />
      <div className="contentWrapper">
        <h5>Who can see my last seen info</h5>
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
        <hr />
        <h5>Who can see my when I am online</h5>
        <div className="selection">
          <StyledRadio name="lastSeen" type="radio" />
          <Label />
          <span>Everyone</span>
        </div>
        <div className="selection">
          <StyledRadio name="lastSeen" type="radio" />
          <Label />
          <span>Same as last seen info</span>
        </div>
        <p className="note">
          If you do not share your last seen and online information, you will
          not be able to see other user's last seen and online information.
        </p>
      </div>
    </Wrapper>
  );
};

export default LastSeen;
