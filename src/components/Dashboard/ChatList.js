import React from "react";
import { ListContainer, ChatWrapper } from "./Dashboard.styled";
import { MdKeyboardArrowDown } from "react-icons/md";
import avatar from "..//..//assets/girl.png";
import avatar2 from "..//..//assets/man2.png";
import avatar3 from "..//..//assets/man3.png";
import avatar4 from "..//..//assets/man4.png";

const ChatList = () => {
  return (
    <ListContainer>
      <ChatWrapper>
        <img src={avatar} alt="avatar" />
        <div className="chatInfo">
          <span>Jane</span>
          <p>Ok. Thank you!</p>
        </div>
        <div className="chatTime">
          <span>1:55 pm</span>
          <MdKeyboardArrowDown className="optionBtn" />
        </div>
      </ChatWrapper>
      <ChatWrapper>
        <img src={avatar} alt="avatar" />
        <div className="chatInfo">
          <span>Babe</span>
          <p>I love you!</p>
        </div>
        <div className="chatTime">
          <span>1:50 pm</span>
          <MdKeyboardArrowDown className="optionBtn" />
        </div>
      </ChatWrapper>
      <ChatWrapper>
        <img src={avatar3} alt="avatar" />
        <div className="chatInfo">
          <span>John</span>
          <p>I told her to do but you know...</p>
        </div>
        <div className="chatTime">
          <span>12:20 pm</span>
          <MdKeyboardArrowDown className="optionBtn" />
        </div>
      </ChatWrapper>
      <ChatWrapper>
        <img src={avatar} alt="avatar" />
        <div className="chatInfo">
          <span>Julie</span>
          <p>No worries :)</p>
        </div>
        <div className="chatTime">
          <span>18:44 pm</span>
          <MdKeyboardArrowDown className="optionBtn" />
        </div>
      </ChatWrapper>
      <ChatWrapper>
        <img src={avatar4} alt="avatar" />
        <div className="chatInfo">
          <span>Micheal</span>
          <p>I talked to him already. No need.</p>
        </div>
        <div className="chatTime">
          <span>19:18 pm</span>
          <MdKeyboardArrowDown className="optionBtn" />
        </div>
      </ChatWrapper>
      <ChatWrapper>
        <img src={avatar3} alt="avatar" />
        <div className="chatInfo">
          <span>Mohammed</span>
          <p>We'll have meeting next week.</p>
        </div>
        <div className="chatTime">
          <span>yesterday</span>
          <MdKeyboardArrowDown className="optionBtn" />
        </div>
      </ChatWrapper>
      <ChatWrapper>
        <img src={avatar4} alt="avatar" />
        <div className="chatInfo">
          <span>Isaac</span>
          <p>Have some beers?</p>
        </div>
        <div className="chatTime">
          <span>yesterday</span>
          <MdKeyboardArrowDown className="optionBtn" />
        </div>
      </ChatWrapper>
      <ChatWrapper>
        <img src={avatar3} alt="avatar" />
        <div className="chatInfo">
          <span>Boris</span>
          <p>See you soon buddy</p>
        </div>
        <div className="chatTime">
          <span>yesterday</span>
          <MdKeyboardArrowDown className="optionBtn" />
        </div>
      </ChatWrapper>
      <ChatWrapper>
        <img src={avatar4} alt="avatar" />
        <div className="chatInfo">
          <span>Brandon</span>
          <p>Get somethngs wile on the road for eat.</p>
        </div>
        <div className="chatTime">
          <span>27.10.2022</span>
          <MdKeyboardArrowDown className="optionBtn" />
        </div>
      </ChatWrapper>
      <ChatWrapper>
        <img src={avatar2} alt="avatar" />
        <div className="chatInfo">
          <span>Anthony</span>
          <p>I will let you know.</p>
        </div>
        <div className="chatTime">
          <span>24.10.2022</span>
          <MdKeyboardArrowDown className="optionBtn" />
        </div>
      </ChatWrapper>
    </ListContainer>
  );
};

export default ChatList;
