import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MenuWrapper } from "./Settings.styled";
import { IoMdNotifications } from "react-icons/io";
import { HiDocumentText } from "react-icons/hi";
import {
  MdLock,
  MdOutlineSecurity,
  MdOutlineBrightness6,
  MdOutlineWallpaper,
  MdOutlineHelp,
} from "react-icons/md";
import Modal from "./SubmenuItems/ThemeModal/Modal";


const List = () => {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  return (
    <MenuWrapper>
      <div onClick={() => navigate("notifications")} className="icon-group">
        <IoMdNotifications className="icon" />
        <li>Notifications</li>
      </div>
      <div onClick={() => navigate("privacy")} className="icon-group">
        <MdLock className="icon" />
        <li>Privacy</li>
      </div>
      <div onClick={() => navigate("security")} className="icon-group">
        <MdOutlineSecurity className="icon" />
        <li>Security</li>
      </div>
      <div onClick={() => setOpenModal(true)} className="icon-group">
        <MdOutlineBrightness6 className="icon" />
        <li>Theme</li>
      </div>
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
      <div onClick={() => navigate("wallpaper")} className="icon-group">
        <MdOutlineWallpaper className="icon" />
        <li>Chat Wallpaper</li>
      </div>
      <div onClick={() => navigate("request-chat")} className="icon-group">
        <HiDocumentText className="icon" />
        <li>Request Account Information</li>
      </div>
      <div onClick={() => navigate("help")} className="icon-group">
        <MdOutlineHelp className="icon" />
        <li>Help</li>
      </div>
    </MenuWrapper>
  );
};

export default List;
