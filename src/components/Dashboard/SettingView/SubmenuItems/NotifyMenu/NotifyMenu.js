import React from "react";
import { useSelector } from "react-redux";
import Header from "../../Header";
import {
  Wrapper,
  MsgWrap,
  Label,
  CheckBox,
  SoundWrap,
} from "./NotifyMenu.styled";

const NotifyMenu = () => {
  const { theme } = useSelector((state) => state.user.userInfo)

  return (
    <Wrapper theme={theme}>
      <Header />
      <MsgWrap theme={theme}>
        <div className="contentWrapper">
          <p>MESSAGES</p>
        </div>
        <div className="checkboxWrapper">
          <p>
            Message notifications
            <span>Show notifications for new messages</span>
          </p>
          <CheckBox theme={theme} type="checkbox" />
          <Label theme={theme}/>
        </div>
      </MsgWrap>
      <SoundWrap theme={theme}>
        <div className="checkboxWrapper">
          <p>
            Sounds
            <span>Incoming messages are notified with voice alerts</span>
          </p>
          <CheckBox theme={theme} type="checkbox" />
          <Label theme={theme}/>
        </div>
      </SoundWrap>
    </Wrapper>
  );
};

export default NotifyMenu;
