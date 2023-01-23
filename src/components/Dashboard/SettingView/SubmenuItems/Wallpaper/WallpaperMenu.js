import { useState } from "react";
import Header from "../../Header";
import {
  Wrapper,
  ContentWrapper,
  Label,
  CheckBox,
} from "./WallpaperMenu.styled";
import BackgroundData from "./ColorData.json";
import { useDispatch, useSelector } from "react-redux";
import {
  updateWallpaper,
  toggleDrawings,
} from "../../../../../features/user/services";

const WallpaperMenu = () => {
  const dispatch = useDispatch();
  const { theme, chatWallpaper, drawings} = useSelector((state) => state.user.userInfo);
  const { userId } = useSelector((state) => state.auth);
  const [color, setColor] = useState(chatWallpaper);

  const [chatDrawings, setChatDrawings] = useState(drawings); // default value is true

  const handleClick = () => {
    updateWallpaper({ color: color, userId }, dispatch);
  };

  const handleDrawingsChange = async () => {
    setChatDrawings(!chatDrawings);
    try {
      await toggleDrawings({ userId, drawings: !chatDrawings }, dispatch);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper theme={theme}>
      <Header />
      <ContentWrapper theme={theme}>
        <div className="checkBoxWrapper">
          <CheckBox
            checked={drawings}
            onChange={handleDrawingsChange}
            theme={theme}
            type="checkbox"
          />
          <Label theme={theme} />
          <span>Add iChat Drawings</span>
        </div>
        <div className="content">
          {BackgroundData.map((item, index) => (
            <button
              className="btn"
              onClick={() => {
                setColor(item.color);
                handleClick();
              }}
              key={index}
              style={{ backgroundColor: `${item.color}` }}
            >
              {item.text}
            </button>
          ))}
        </div>
      </ContentWrapper>
    </Wrapper>
  );
};

export default WallpaperMenu;
