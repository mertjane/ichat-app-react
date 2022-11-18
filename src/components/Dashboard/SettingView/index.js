import React from "react";
import Header from "./Header";
import Avatar from "./Avatar";
import List from "./List";
import { Wrapper } from "./Settings.styled";

const SettingsView = () => {
  return (
    <Wrapper>
      <Header />
      <Avatar />
      <List />
    </Wrapper>
  );
};

export default SettingsView;
