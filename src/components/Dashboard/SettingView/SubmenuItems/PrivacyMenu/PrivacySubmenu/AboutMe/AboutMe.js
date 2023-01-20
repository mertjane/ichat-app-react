import React from "react";
import { useSelector } from "react-redux";
import Header from "..//..//..//..//Header";
import { Wrapper, Label, StyledRadio } from "./AboutMe.styled";

const AboutMe = () => {
  const { theme } = useSelector((state) => state.user.userInfo);
  return (
    <Wrapper theme={theme}>
      <Header />
      <div className="contentWrapper">
        <h5>Who can see my profile photo</h5>
        <div className="selection">
          <StyledRadio theme={theme} name="lastSeen" type="radio" />
          <Label theme={theme} />
          <span>Everyone</span>
        </div>
        <div className="selection">
          <StyledRadio theme={theme} name="lastSeen" type="radio" />
          <Label theme={theme} />
          <span>My contacts</span>
        </div>
        <div className="selection">
          <StyledRadio theme={theme} name="lastSeen" type="radio" />
          <Label theme={theme} />
          <span>No one</span>
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutMe;
