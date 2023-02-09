import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleSounds } from "../../../../../features/user/services";
import Header from "../../Header";
import {
  Wrapper,
  MsgWrap,
  Label,
  CheckBox,
  SoundWrap,
} from "./NotifyMenu.styled"; 

const NotifyMenu = () => {
  const dispatch = useDispatch();
  const { theme, sounds } = useSelector((state) => state.user.userInfo);
  const { userId } = useSelector((state) => state.auth); 
  const [appSounds, setAppSounds] = useState(sounds);

  const handleSoundsChange = async () => {
    setAppSounds(!appSounds);
    try {
      await toggleSounds({ userId, sounds: !appSounds }, dispatch);
    } catch (error) {
      console.log(error);
    }
  };

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
          <Label theme={theme} />
        </div>
      </MsgWrap>
      <SoundWrap theme={theme}>
        <div className="checkboxWrapper">
          <p>
            Sounds
            <span>Incoming messages are notified with voice alerts</span>
          </p>
          <CheckBox
            checked={sounds}
            onChange={handleSoundsChange}
            theme={theme}
            type="checkbox"
          />
          <Label theme={theme} />
        </div>
      </SoundWrap>
    </Wrapper>
  );
};

export default NotifyMenu;
