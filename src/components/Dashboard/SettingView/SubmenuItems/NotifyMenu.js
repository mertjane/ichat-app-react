import React from "react";
import Header from "../Header";
import {MsgWrap, Label, CheckBox, SoundWrap} from "./Styles/NotifyMenu.styled"

const NotifyMenu = () => {
  return (
    <>
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
    </>
  );
};

export default NotifyMenu;
