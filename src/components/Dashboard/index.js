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
import SlideMenu from "../ChatSlideMenu/SlideMenu";

export const Wrapper = styled.div`
  width: 27%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => (props.theme === "dark" ? "#111b21" : "#f0f2f5")};
  border-right: ${(props) =>
    props.theme === "dark" ? "1px solid #ffffff2b" : "1px solid #f0ededd6"};
  @media (max-width: 1800px) {
    width: 32%;
  }
`;
export const ChatWrapper = styled.div`
  width: ${(props) => (props.openRightMenu === true ? "46%" : "73%")};
  height: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 1800px) {
    width: 68%;
  }
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
      color: ${(props) => (props.theme === "dark" ? "#7e8488" : "#949393")};
      width: 50%;
      text-align: center;
    }
  }
  .bar {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 7px;
    background-color: ${(props) =>
      props.theme === "dark" ? "#008069" : "#25d366"};
  }
`;

const Dashboard = () => {
  const { theme } = useSelector((state) => state.user.userInfo);
  const { userId } = useSelector((state) => state.auth);
  const [currentChat, setCurrentChat] = useState(null);
  const [socket, setSocket] = useState(null);
  const [openRightMenu, setOpenRightMenu] = useState(false);
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    setSocket(io(process.env.REACT_APP_SOCKET_ENDPOINT));
  }, []);

  useEffect(() => {
    if (socket) {
      socket.emit("user-online", userId);
      socket.on("user-disconnect-from-server", () => setIsOnline(false));
    }
  }, [socket, userId])


  return (
    <>
      <Wrapper theme={theme}>
        <Routes>
          <Route
            path="/"
            element={
              <Main
                setCurrentChat={setCurrentChat}
                currentChat={currentChat}
                socket={socket}
              />
            }
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
      <ChatWrapper theme={theme} openRightMenu={openRightMenu}>
        {currentChat ? (
          <Chat
            openRightMenu={openRightMenu}
            setOpenRightMenu={setOpenRightMenu}
            socket={socket}
            currentChat={currentChat}
            setCurrentChat={setCurrentChat}
            isOnline={isOnline}
            setIsOnline={setIsOnline}
          />
        ) : (
          <>
            <div className="svg-box">
              {theme === "dark" ? (
                <img src={noChatIMGdark} alt="visual" className="no-chat-img" />
              ) : (
                <img src={noChatIMG} alt="visual" className="no-chat-img" />
              )}

              <h2>iChat Web</h2>
              <p>
                iChat is an encrypted instant messaging service that allows
                users to communicate securely without sharing their phone
                numbers.
              </p>
            </div>
            <div className="bar" />
          </>
        )}
      </ChatWrapper>
      {openRightMenu && <SlideMenu currentChat={currentChat} onClose={() => setOpenRightMenu(false)}/>}
    </>
  );
};

export default Dashboard;
