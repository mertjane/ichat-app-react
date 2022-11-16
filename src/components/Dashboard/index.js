import React from "react";
import Main from "./MainView";
import ProfileView from "./ProfileView";
import SettingsView from "./SettingView";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

// Submenu Components
import NotifyMenu from "./SettingView/SubmenuItems/NotifyMenu/NotifyMenu";
import SecurityMenu from "./SettingView/SubmenuItems/SecurityMenu/SecurityMenu";
import WallpaperMenu from "./SettingView/SubmenuItems/Wallpaper/WallpaperMenu";
import RequestMenu from "./SettingView/SubmenuItems/RequestMenu/RequestMenu";
import HelpMenu from "./SettingView/SubmenuItems/HelpMenu/HelpMenu";
import PrivacyMenu from "./SettingView/SubmenuItems/PrivacyMenu/PrivacyMenu";
import LastSeen from "./SettingView/SubmenuItems/PrivacyMenu/PrivacySubmenu/LastSeen/LastSeen";
import ProfilePhoto from "./SettingView/SubmenuItems/PrivacyMenu/PrivacySubmenu/ProfilePhoto/ProfilePhoto";
import AboutMe from "./SettingView/SubmenuItems/PrivacyMenu/PrivacySubmenu/AboutMe/AboutMe";
import MsgDuration from "./SettingView/SubmenuItems/PrivacyMenu/PrivacySubmenu/MessageDuration/MsgDuration";

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
        <Route path="/settings/privacy" element={<PrivacyMenu />} />
        {/* Privacy Submenu */}
        <Route
          path="/settings/privacy/last-seen-online"
          element={<LastSeen />}
        />
        <Route
          path="/settings/privacy/profile-photo"
          element={<ProfilePhoto />}
        />
        <Route path="/settings/privacy/about-me" element={<AboutMe />} />
        <Route
          path="/settings/privacy/message-duration"
          element={<MsgDuration />}
        />
        <Route path="/settings/security" element={<SecurityMenu />} />
        <Route path="/settings/wallpaper" element={<WallpaperMenu />} />
        <Route path="/settings/request-chat" element={<RequestMenu />} />
        <Route path="/settings/help" element={<HelpMenu />} />
        <Route path="/profile" element={<ProfileView />} />
      </Routes>
    </Wrapper>
  );
};

export default Dashboard;
