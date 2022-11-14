import { useState, useEffect, useRef } from "react";
import { NavWrapper } from "./MainView.styled";
import DropdownItem from "../Dropdown/DropdownItem"
import userAvatar from "..//..//../assets/man.png"
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiChatNewFill } from "react-icons/ri";
import { useSelector } from "react-redux";

const Navbar = () => {
  const auth = useSelector((state) => state.auth)
  const [open, setOpen] = useState(false);

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
        <img src={userAvatar} alt="user" />
        <span>{auth.username}</span>
      </div>
      <div className="BtnGroup">
        <RiChatNewFill className="btn" />
        <BsThreeDotsVertical onClick={() => setOpen(!open)} className="btn" />
      </div>
      <div className={`dropdownMenu ${open ? "active" : "inactive"}`}>
        <DropdownItem />
      </div>
    </NavWrapper>
  );
};

export default Navbar;
