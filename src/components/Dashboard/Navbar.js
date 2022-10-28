import React from "react";
import { NavWrapper } from "./Dashboard.styled";
import userAvatar from "..//..//assets/man.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiChatNewFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <NavWrapper>
      <img src={userAvatar} alt="user" />
      <div>
        <RiChatNewFill className="btn" />
        <BsThreeDotsVertical className="btn" />
      </div>
    </NavWrapper>
  );
};

export default Navbar;
