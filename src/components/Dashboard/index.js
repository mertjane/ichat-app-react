import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import noChatIMG from "../../assets/chat_img.svg";
import noChatIMGdark from "../../assets/darkThemeChat.svg";
import { io } from "socket.io-client";
import styled from "styled-components";

import Main from "./MainView";
import ProfileView from "./ProfileView";
import SettingsView from "./SettingView";
import Contacts from "./ContactList/Contacts";
import Chat from "../Chat/index";

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
import BlockedUsers from "./SettingView/SubmenuItems/PrivacyMenu/PrivacySubmenu/BlockedContacts/BlockedUsers";

export const Wrapper = styled.div`
  width: 27%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => (props.theme === "dark" ? "#111b21" : "none")};
`;
export const ChatWrapper = styled.div`
  width: 73%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .svg-box {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column; 
    align-items: center;
    gap: 14px;
    .no-chat-img {
      height: 40%;
      width: 40%;
      object-fit: contain;
      position: relative;
      top: 164px;
    }
    h2 {
      font-size: 36px;
      font-weight: 300;
      color: ${(props) => (props.theme === "dark" ? "#d9dee0" : "#3d3d3dc7")};
      position: relative;
      top: 110px;
    }
    p {
      position: relative;
      top: 110px;
      font-size: 12.8px;
      color: ${(props) => (props.theme === "dark" ? "#96969e" : "#949393")};
      width: 50%;
      text-align: center;
    }
  }
`;

const Dashboard = () => {
  const { theme } = useSelector((state) => state.user.userInfo);
  const [currentChat, setCurrentChat] = useState(null);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    setSocket(io(process.env.REACT_APP_SOCKET_ENDPOINT));
  }, []);

  return (
    <>
      <Wrapper theme={theme}>
        <Routes>
          <Route
            path="/"
            element={<Main socket={socket} setCurrentChat={setCurrentChat} />}
          />
          <Route
            path="/contacts"
            element={
              <Contacts
                setCurrentChat={setCurrentChat}
                currentChat={currentChat}
              />
            }
          />
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
          <Route
            path="/settings/privacy/blocked-contacts"
            element={<BlockedUsers />}
          />
          <Route path="/settings/security" element={<SecurityMenu />} />
          <Route path="/settings/wallpaper" element={<WallpaperMenu />} />
          <Route path="/settings/request-chat" element={<RequestMenu />} />
          <Route path="/settings/help" element={<HelpMenu />} />
          <Route path="/profile" element={<ProfileView />} />
        </Routes>
      </Wrapper>
      <ChatWrapper theme={theme}>
        {currentChat ? (
          <Chat
            socket={socket}
            currentChat={currentChat}
            setCurrentChat={setCurrentChat}
          />
        ) : (
          <div className="svg-box">
            {theme === "dark" ? (
              <img src={noChatIMGdark} alt="visual" className="no-chat-img" />
            ) : (
              <img src={noChatIMG} alt="visual" className="no-chat-img" />
            )}

            <h2>iChat Web</h2>
            <p>
              iChat is an encrypted instant messaging service that allows users
              to communicate securely without sharing their phone numbers.
            </p>
          </div>
        )}
      </ChatWrapper>
    </>
  );
};

export default Dashboard;
