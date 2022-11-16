import React from "react";
import Header from "..//..//Header";
import {useNavigate} from "react-router-dom"
import { Wrapper, Label, CheckBox } from "./Privacy.styled";
import { MdKeyboardArrowRight } from "react-icons/md";

const PrivacyMenu = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Header />
      <div className="contentWrapper">
        <h5>Who can see my personal information</h5>
        <div onClick={() => navigate("last-seen-online")} className="selection">
          <label>
            Last seen and online
            <span>Nobody, Everyone</span>
          </label>
          <MdKeyboardArrowRight className="icon" />
        </div>
        <hr />
        <div onClick={() => navigate("profile-photo")} className="selection">
          <label>
            Profile photo
            <span>my contacts</span>
          </label>
          <MdKeyboardArrowRight className="icon" />
        </div>
        <hr />
        <div onClick={() => navigate("about-me")} className="selection">
          <label>
            About me
            <span>my contacts</span>
          </label>
          <MdKeyboardArrowRight className="icon" />
        </div>
        <hr />
        <div className="selection">
          <label>
            Read receipt
            <span>
              If you disable this feature, you will not be able to send or
              receive Read Receipts. Read receipts are always sent for group
              chats.
            </span>
          </label>
          <CheckBox type="checkbox" />
          <Label />
        </div>
      </div>
      <div onClick={() => navigate("message-duration")} className="contentWrapper">
        <h5>Timed messages</h5>
        <div className="selection">
          <label>
            Default message duration
            <span>Closed</span>
          </label>
          <MdKeyboardArrowRight className="icon" />
        </div>
      </div>
      <div className="contentWrapper">
        <div className="selection">
          <label>
            blocked contacts
            <span>10</span>
          </label>
          <MdKeyboardArrowRight className="icon" />
        </div>
      </div>
    </Wrapper>
  );
};

export default PrivacyMenu;
