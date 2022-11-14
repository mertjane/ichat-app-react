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
        </h2>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
