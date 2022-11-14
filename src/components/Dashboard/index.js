import React from "react";
import Main from "./MainView";
import ProfileView from "./ProfileView";
import SettingsView from "./SettingView";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

// Submenu Components
import NotifyMenu from "./SettingView/SubmenuItems/NotifyMenu";
import SecurityMenu from "./SettingView/SubmenuItems/SecurityMenu";

export const Wrapper = styled.div`
  flex: 1;
`;

const Dashboard = () => {
  return (
    <Wrapper>
      <Routes>
        <Route path="*" element={<Main />} />
        <Route path="/settings" element={<SettingsView />} />
        <Route path="/settings/notifications" element={<NotifyMenu />} />
        <Route path="/settings/security" element={<SecurityMenu />} />
        <Route path="/profile" element={<ProfileView />} />
      </Routes>
    </Wrapper>
  );
};

export default Dashboard;
