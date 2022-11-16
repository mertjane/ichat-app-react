import React from "react";
import { HeaderWrapper } from "./Settings.styled";
import { TfiArrowLeft } from "react-icons/tfi";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <HeaderWrapper>
      <div>
        <TfiArrowLeft
          onClick={() => {
            if (location.pathname === "/settings/notifications") {
              navigate("/settings");
            } else if (location.pathname === "/settings/security") {
              navigate("/settings");
            } else if (location.pathname === "/settings/wallpaper") {
              navigate("/settings");
            } else if (location.pathname === "/settings/request-chat") {
              navigate("/settings");
            } else if (location.pathname === "/settings/help") {
              navigate("/settings");
            } else if (location.pathname === "/settings/privacy") {
              navigate("/settings");
            } else if (
              location.pathname === "/settings/privacy/last-seen-online"
            ) {
              navigate("/settings/privacy");
            } else if (
              location.pathname === "/settings/privacy/profile-photo"
            ) {
              navigate("/settings/privacy");
            } else if (
              location.pathname === "/settings/privacy/about-me"
            ) {
              navigate("/settings/privacy");
            } else if (
              location.pathname === "/settings/privacy/message-duration"
            ) {
              navigate("/settings/privacy");
            } else {
              navigate("/");
            }
          }}
          className="btn"
        />
        <h2>
          {location.pathname === "/settings" && "Settings"}
          {location.pathname === "/settings/notifications" && "Notifications"}
          {location.pathname === "/settings/security" && "Security"}
          {location.pathname === "/settings/wallpaper" && "Set Chat Wallpaper"}
          {location.pathname === "/settings/request-chat" &&
            "Request Account Information"}
          {location.pathname === "/settings/help" && "Help"}
          {location.pathname === "/settings/privacy" && "Privacy"}
          {location.pathname === "/settings/privacy/last-seen-online" &&
            "Last seen and online"}
          {location.pathname === "/settings/privacy/profile-photo" &&
            "Profile photo"}
            {location.pathname === "/settings/privacy/about-me" &&
            "About me"}
            {location.pathname === "/settings/privacy/message-duration" &&
            "Default message duration"}
        </h2>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
