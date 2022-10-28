import React from 'react'
import { NavWrapper } from './Chat.styled'
import { BsThreeDotsVertical } from "react-icons/bs";
import { TiUserAdd } from "react-icons/ti";
import { MdVideocam } from "react-icons/md";
import avatar from "..//..//assets/girl.png"

const Navbar = () => {
  return (
    <NavWrapper>
        <div className="contactInfo">
            <img src={avatar} alt="avatar" />
            <span>Babe</span>
        </div>
        <div className="btnGroup">
          <MdVideocam className="btn" />
          <TiUserAdd className="btn" />
          <BsThreeDotsVertical className="btn" />
        </div>
    </NavWrapper>
  )
}

export default Navbar