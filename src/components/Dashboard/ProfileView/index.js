import React from "react";
import Header from "../ProfileView/Header";
import AvatarDisplay from "./AvatarDisplay";
import StatusDisplay from "./StatusDisplay";
import { Wrapper } from "./Profile.styled";

const ProfileView = () => {
  return (
    <Wrapper>
      <Header />
      <AvatarDisplay />
      <StatusDisplay />
    </Wrapper>
  );
};

export default ProfileView;
