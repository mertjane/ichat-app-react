import React from "react";
import Header from "../../Header";
import { Wrapper, ContentWrapper } from "./WallpaperMenu.styled";
import BackgroundData from "./ColorData.json";
import { useSelector } from "react-redux";

const WallpaperMenu = () => {
  const { theme } = useSelector((state) => state.user.userInfo)
  return (
    <Wrapper theme={theme}>
      <Header />
      <ContentWrapper theme={theme}>
      {BackgroundData.map((item, index) => (
        <button key={index} style={{backgroundColor:`${item.color}`}}>{item.text}</button>
      ))}
      </ContentWrapper>
    </Wrapper>
  );
};

export default WallpaperMenu;
