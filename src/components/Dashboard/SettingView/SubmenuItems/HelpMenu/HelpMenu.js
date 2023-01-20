import React from "react";
import { Wrapper } from "./Help.styled";
import Header from "..//..//Header";
import { MdOutlineHelp } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { HiDocumentText } from "react-icons/hi";
import Lottie from "react-lottie";
import lightThemeAnimation from "..//..//..//..//..//assets/981-consultation-outline-edited.json";
import darkThemeAnimation from "../../../../../assets/lottieflow-chat-17-4-ffffff-easey.json";
import { useSelector } from "react-redux";

const HelpMenu = () => {
  const { theme } = useSelector((state) => state.user.userInfo);

  // light theme animation
  const lightDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lightThemeAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // dark theme animation
  const darkDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: darkThemeAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Wrapper theme={theme}>
      <Header />
      <div className="svgWrapper">
        <div>
          {theme === "dark" ? (
            <Lottie options={darkDefaultOptions} height={180} width={180} />
          ) : (
            <Lottie options={lightDefaultOptions} height={240} width={240} />
          )}
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
