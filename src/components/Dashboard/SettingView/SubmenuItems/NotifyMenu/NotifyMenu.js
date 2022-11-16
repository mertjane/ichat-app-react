import React from "react";
import Header from "../../Header";
import {
  Wrapper,
  MsgWrap,
  Label,
  CheckBox,
  SoundWrap,
} from "./NotifyMenu.styled";

const NotifyMenu = () => {
  return (
    <Wrapper>
      <Header />
      <MsgWrap>
        <div className="contentWrapper">
          <p>MESSAGES</p>
        </div>
        <div className="checkboxWrapper">
          <p>
            Message notifications
            <span>Show notifications for new messages</span>
          </p>
          <CheckBox type="checkbox" />
          <Label />
        </div>
      </MsgWrap>
      <SoundWrap>
        <div className="checkboxWrapper">
          <p>
            Sounds
            <span>Incoming messages are notified with voice alerts</span>
          </p>
          <CheckBox type="checkbox" />
          <Label />
        </div>
      </SoundWrap>
    </Wrapper>
  );
};

export default NotifyMenu;
