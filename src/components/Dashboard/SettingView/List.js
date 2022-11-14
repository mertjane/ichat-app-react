import React from "react";
import { useNavigate } from "react-router-dom";
import { MenuWrapper } from "./Settings.styled";
import { IoMdNotifications } from "react-icons/io";
import { HiDocumentText } from "react-icons/hi";
import { TbKeyboard } from "react-icons/tb";
import {
  MdLock,
  MdOutlineSecurity,
  MdOutlineBrightness6,
  MdOutlineWallpaper,
  MdDownload,
  MdOutlineHelp,
} from "react-icons/md";



const List = () => {
  const navigate = useNavigate();
  return (
    <MenuWrapper>
      <div onClick={() => navigate("notifications")} className="icon-group">
        <IoMdNotifications className="icon" />
        <li>Notifications</li>
      </div>
      <div className="icon-group">
        <MdLock className="icon" />
        <li>Privacy</li>
      </div>
      <div onClick={() => navigate("security")} className="icon-group">
        <MdOutlineSecurity className="icon" />
        <li>Security</li>
      </div>
      <div className="icon-group">
        <MdOutlineBrightness6 className="icon" />
        <li>Theme</li>
      </div>
      <div className="icon-group">
        <MdOutlineWallpaper className="icon" />
        <li>Chat Wallpaper</li>
      </div>
      <div className="icon-group">
        <MdDownload className="icon" />
        <li>Download Media Automatically</li>
      </div>
      <div className="icon-group">
        <HiDocumentText className="icon" />
        <li>Request Account Information</li>
      </div>
      <div className="icon-group">
        <TbKeyboard className="icon" />
        <li>Keyboard Shortcuts</li>
      </div>
      <div className="icon-group">
        <MdOutlineHelp className="icon" />
        <li>Help</li>
      </div>
    </MenuWrapper>
  );
};

export default List;
