import React from "react";
import Header from "..//..//Header";
import { MdLock, MdUpdate } from "react-icons/md";
import { TbMessages } from "react-icons/tb";
import { ImAttachment } from "react-icons/im";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Wrapper, CheckBox, Label } from "./SecurityMenu.styled";

const SecurityMenu = () => {
  return (
    <Wrapper>
      <Header />
      <div className="iconWrapper">
        <MdLock className="icon" />
      </div>
      <div className="contentWrapper">
        <h3>Your chats and calls are private</h3>
        <p>
          With end-to-end encrypton, your personal messages and calls stay
          between you and the people you choose. Even ichat cannot read or
          listen to these contents. These contents include:
        </p>
      </div>
      <div className="infoWrapper">
        <label>
          <TbMessages className="icon" />
          Your text and voice messages
        </label>
        <label>
          <BsTelephone className="icon" />
          Your voice and video calls
        </label>
        <label>
          <ImAttachment className="icon" />
          Your photos, videos and documents
        </label>
        <label>
          <HiOutlineLocationMarker className="icon" />
          Your location shares
        </label>
        <label>
          <MdUpdate className="icon" />
          Your status updates
        </label>
        <span>More information</span>
      </div>
      <hr />
      <div className="selectionWrapper">
        <div className="checkbox">
          <CheckBox type="checkbox" />
          <Label />
          <span>Show Security notifications on this computer</span>
        </div>
        <p>
          Get notified when your security code changes for anyone's phone. If
          you have more than one device, this setting must be enabled on each
          device from which you want to receive notifications.{" "}
          <span>More information</span>
        </p>
      </div>
    </Wrapper>
  );
};

export default SecurityMenu;
