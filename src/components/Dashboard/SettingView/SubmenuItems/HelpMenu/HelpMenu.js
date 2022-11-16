import React from "react";
import { Wrapper } from "./Help.styled";
import Header from "..//..//Header";
import { MdOutlineHelp } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { HiDocumentText } from "react-icons/hi";
import Lottie from "react-lottie";
import animationData from "..//..//..//..//..//assets/981-consultation-outline-edited.json";

const HelpMenu = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Wrapper>
      <Header />
      <div className="svgWrapper">
        <div>
          <Lottie options={defaultOptions} height={240} width={240} />
        </div>
        <span>Version 2.4522.7</span>
      </div>
      <div className="selection">
        <div className="icon-group">
          <MdOutlineHelp className="icon" />
          <li>Help center</li>
        </div>
        <div className="icon-group">
          <IoIosPeople className="icon" />
          <li>Contact us</li>
        </div>
        <div className="icon-group">
          <HiDocumentText className="icon" />
          <li>Terms and Privacy Policy</li>
        </div>
      </div>
    </Wrapper>
  );
};

export default HelpMenu;
