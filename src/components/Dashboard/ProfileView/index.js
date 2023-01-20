import React from "react";
import { useSelector } from "react-redux";
import Header from "../ProfileView/Header";
import AvatarDisplay from "./AvatarDisplay";
import StatusDisplay from "./StatusDisplay";
import { Wrapper } from "./Profile.styled";

const ProfileView = () => {
  const { theme } = useSelector((state) => state.user.userInfo);
  return (
    <Wrapper theme={theme}>
      <Header />
      <AvatarDisplay />
      <StatusDisplay />
    </Wrapper>
  );
};

export default ProfileView;
