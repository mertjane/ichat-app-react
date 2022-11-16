import React from "react";
import Header from "../../Header";
import { Wrapper, ContentWrapper } from "./WallpaperMenu.styled";
import BackgroundData from "./ColorData.json";

const WallpaperMenu = () => {
  return (
    <Wrapper>
      <Header />
      <ContentWrapper>
      {BackgroundData.map((item, index) => (
        <button key={index} style={{backgroundColor:`${item.color}`}}>{item.text}</button>
      ))}
      </ContentWrapper>
    </Wrapper>
  );
};

export default WallpaperMenu;
