import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { NavWrapper } from "./MainView.styled";
import DropdownItem from "../Dropdown/DropdownItem";
import AddUser from "../../Modals/AddUser";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiChatNewFill } from "react-icons/ri";
import { TiUserAdd } from "react-icons/ti";
import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { name } = useSelector((state) => state.user.userInfo);
  const { avatar } = useSelector((state) => state.user.userInfo);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const menuRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <NavWrapper ref={menuRef}>
      <div className="userInfo">
        <img src={avatar ? PF + avatar : PF + "user.png"} alt="user" />
        <span>{name}</span>
      </div>
      <div className="BtnGroup">
        <TiUserAdd title="Add User" onClick={() => setOpenModal(true)} className="btn" />
        <RiChatNewFill title="New Chat" onClick={() => navigate("/contacts")} className="btn" />
        <BsThreeDotsVertical title="Settings" onClick={() => setOpen(!open)} className="btn" />
      </div>
      <div className={`dropdownMenu ${open ? "active" : "inactive"}`}>
        <DropdownItem />
      </div>
      <AddUser open={openModal} onClose={() => setOpenModal(false)} />
    </NavWrapper>
  );
};

export default Navbar;
