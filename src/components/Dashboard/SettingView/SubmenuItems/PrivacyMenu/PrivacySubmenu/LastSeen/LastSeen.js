import React from "react";
import { useSelector } from "react-redux";
import Header from "..//..//..//..//Header";
import { Wrapper, Label, StyledRadio } from "./LastSeen.styled";

const LastSeen = () => {
  const { theme } = useSelector((state) => state.user.userInfo)
  return (
    <Wrapper theme={theme}>
      <Header />
      <div className="contentWrapper">
        <h5>Who can see my last seen info</h5>
        <div className="selection">
          <StyledRadio theme={theme} name="lastSeen" type="radio" />
          <Label theme={theme}/>
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
        <hr />
        <h5>Who can see my when I am online</h5>
        <div className="selection">
          <StyledRadio theme={theme} name="lastSeen" type="radio" />
          <Label theme={theme} />
          <span>Everyone</span>
        </div>
        <div className="selection">
          <StyledRadio theme={theme} name="lastSeen" type="radio" />
          <Label theme={theme} />
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
