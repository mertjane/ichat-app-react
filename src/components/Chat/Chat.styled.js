import styled, { css } from "styled-components";
import chatBack from "../../assets/lightback.png";
import chatDarkBack from "../../assets/darkBack.png";
import confirmBtnLight from "../../assets/confirm_btn_light.svg";
import confirmBtnDark from "../../assets/confirm_btn_dark.svg";
import micBtnDark from "../../assets/mic_btn_dark.svg";
import micBtnLight from "../../assets/mic_btn_light.svg";
import searchBtnLight from "../../assets/search_btn_light.svg";
import searcBtnDark from "../../assets/search_btn_dark.svg";
import svg1 from "../../assets/1.svg";
import svg2 from "../../assets/2.svg";
import svg3 from "../../assets/3.svg";
import svg4 from "../../assets/4.svg";
import svg5 from "../../assets/5.svg";
import svg6 from "../../assets/6.svg";
import svg7 from "../../assets/7.svg";
import svg8 from "../../assets/8.svg";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const NavWrapper = styled.div`
  height: 40px;
  padding: 10px 22px 10px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .contactInfo {
    display: flex;
    align-items: center;
    gap: 16px;
    img {
      height: 40px;
      width: 40px;
      border-radius: 50%;
      object-fit: cover;
    }
    .displayName {
      font-size: 16px;
      font-weight: 400;
      color: ${(props) => (props.theme === "dark" ? "#d9dee0" : "#111b21d3")};
      display: flex;
      flex-direction: column;
      .status-text {
        font-size: 13.5px;
        font-weight: 400;
        color: ${(props) => (props.theme === "dark" ? "#96969e" : "#555555dd")};
      }
      .last-seen-status {
        font-size: 13.4px;
        font-weight: 500;
        color: ${(props) => (props.theme === "dark" ? "#96969e" : "#555555dd")};
      }
    }
  }
  .btnGroup {
    width: auto;
    display: flex;
    align-items: center;
    gap: 25px;
    .searchBtn {
      background-image: ${(props) =>
        props.theme === "dark"
          ? `url(${searcBtnDark})`
          : `url(${searchBtnLight})`};
      height: 20px;
      width: 20px;
      cursor: pointer;
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
    }
    .btn {
      color: ${(props) => (props.theme === "dark" ? "#AEBAC1" : "#677780")};
      height: 22px;
      width: 22px;
      cursor: pointer;
      padding: 8px;
    }
    & .active {
      border-radius: 50%;
      position: relative;
      background-color: ${(props) =>
        props.theme === "dark" ? "#374248" : "#d9dbde"};
    }
  }
  .navbar-dropdown {
    position: absolute;
    width: 210px;
    height: auto;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    // left: ${({ left }) => left}px;
    // top: ${({ top }) => top}px;
    right: ${(props) => (props.openRightMenu === true ? "460px" : "20px")};
    top: 56px;
    box-sizing: content-box;
    z-index: 9999;
    background-color: ${(props) =>
      props.theme === "dark" ? "#2a373f" : "#ffff"};
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
      rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
      rgba(0, 0, 0, 0.1) 0px 0px 0px 1px inset;
    &.active {
      opacity: 1;
      visibility: visible;
      // transform: translateY(0);
      // transition: var(--speed) ease;
      @keyframes dropdownIn {
        from {
          scale: 0;
        }
        to {
          scale: 1;
        }
      }
      animation: dropdownIn 0.3s ease;
    }
    &.inactive {
      opacity: 0;
      visibility: hidden;
      transform: translateY(-20px);
      transition: var(--speed) ease;
    }
    .list-item {
      overflow: hidden;
      list-style: none;
      display: flex;
      align-items: center;
      height: 100%;
      padding: 18px;
      font-size: 14px;
      text-decoration: none;
      color: ${(props) => (props.theme === "dark" ? "#d9dee0" : "#54656f")};
      cursor: pointer;
      &:hover {
        background-color: ${(props) =>
          props.theme === "dark" ? "#111b21" : "#e4e2de78"};
      }
    }
  }
`;

export const ChatBoxContainer = styled.div`
  height: 100%;
  background-image: ${(props) =>
    props.theme === "dark" ? `url(${chatDarkBack})` : `url(${chatBack})`};
  ${(props) =>
    props.drawings === false &&
    css`
      background-image: none;
    `};
  background-color: ${(props) =>
    props.chatWallpaper && `${props.chatWallpaper}`};
  background-size: contain;
  padding: 40px 70px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 4px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) =>
      props.theme === "dark" ? "#435058ab" : "#9e9d99ac"};
  }
  .day-wrapper {
    display: flex;
    flex-direction: column;
    gap: 2px;
    margin: 10px 0;
    .text {
      color: ${(props) => (props.theme === "dark" ? "#aebac1" : "#677780")};
      font-size: 11.8px;
      font-weight: 500;
      background-color: ${(props) =>
        props.theme === "dark" ? "#1d252b" : "#f8f7f7"};
      padding: 6px 12px;
      margin-top: 10px;
      margin-bottom: 10px;
      border-radius: 6px;
      max-width: max-content;
      align-self: center;
      box-shadow: ${(props) =>
        props.theme === "dark"
          ? "none"
          : `rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px`};
    }
  }
  .scrollBtn {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    background-color: ${(props) =>
      props.theme === "dark" ? "#2a373f" : "#ffff"};
    position: absolute;
    padding: 5px;
    right: 14px;
    bottom: 95px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
    @keyframes scaleIn {
      from {
        opacity: 0;
        scale: 0;
      }
      to {
        opacity: 1;
        scale: 1;
      }
    }
    animation: scaleIn 250ms ease;
    .back-down-btn {
      width: 32px;
      height: 32px;
      color: ${(props) => (props.theme === "dark" ? "#AEBAC1" : "#677780")};
    }
  }
`;

export const InputWrapper = styled.div`
  height: ${(props) => (props.showList ? `700px` : `90px`)};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.showList ? `flex-end` : `center`)};
  gap: 24px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  .blocked-text {
    color: ${(props) => (props.theme === "dark" ? "#a8b9bec6" : "#5a6369")};
    font-size: 13.4px;
  }
  .inputGroup {
    width: 100%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    position: relative;
    margin-bottom: ${(props) => (props.showList ? `8px` : `0`)};
    .btnGroup {
      height: 100%;
      width: ${(props) =>
        props.openRightMenu === true || props.openSlideSearch === true
          ? "14%"
          : "9%"};
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      @media (max-width: 1800px) {
        width: 14%;
      }
      .btn {
        display: flex;
        color: ${(props) => (props.theme === "dark" ? "#aebac1" : "#677780")};
        height: 24px;
        width: 24px;
        cursor: pointer;
        padding: 8px;
      }
      .active {
        border-radius: 50%;
        position: relative;
        background-color: ${(props) =>
          props.theme === "dark" ? "#374248" : "#d9dbde"};
      }
    }
    form {
      width: ${(props) =>
        props.openRightMenu === true || props.openSlideSearch === true
          ? "80%"
          : "85%"};
      height: 50px;
      display: flex;
      align-items: center;
      @media (max-width: 1800px) {
        width: 80%;
      }
      input {
        padding: 14px;
        width: 100%;
        height: 14px;
        border: none;
        border-radius: 8px;
        outline: none;
        background-color: ${(props) =>
          props.theme === "dark" ? "#404d55cc" : "#fffff"};
        color: ${(props) => (props.theme === "dark" ? "#d9dee0" : "#33383b")};
        ::placeholder {
          color: ${(props) =>
            props.theme === "dark" ? "#ddddddb2" : "#677780"};
          font-weight: 500;
        }
      }
    }
    .submit-group {
      height: 100%;
      width: ${(props) =>
        props.openRightMenu === true || props.openSlideSearch === true
          ? "11%"
          : "6%"};
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      @media (max-width: 1800px) {
        width: 11%;
      }
      button {
        padding: 6px 16px;
        border: none;
        background-color: #128c7e;
        color: white;
        font-size: 18px;
        font-weight: 600;
        cursor: pointer;
        display: none;
      }
      .confirmBtn {
        display: flex;
        background-image: ${(props) =>
          props.theme === "dark"
            ? `url(${confirmBtnDark})`
            : `url(${confirmBtnLight})`};
        background-repeat: no-repeat;
        background-position: center;
        height: 24px;
        width: 24px;
        cursor: pointer;
      }
      .micBtn {
        background-image: ${(props) =>
          props.theme === "dark"
            ? `url(${micBtnDark})`
            : `url(${micBtnLight})`};
        background-repeat: no-repeat;
        background-position: center;
        height: 24px;
        width: 24px;
        cursor: pointer;
      }
    }
    // toggle menu
    .input-toggle {
      position: absolute;
      height: min-content;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
      background: transparent;
      left: 49px;
      bottom: 70px;
      box-sizing: border-box;
      z-index: 9999;
      &.active {
        opacity: 1;
        visibility: visible;
        // transform: translateY(0);
        // transition: var(--speed) ease;
        @keyframes toggleIn {
          from {
            // scale: 0;
            height: 100px;
            opacity: 0;
          }
          to {
            //scale: 1;
            height: 250px;
            opacity: 1;
          }
        }
        animation: toggleIn 0.4s ease-in-out;
      }
      &.inactive {
        opacity: 0;
        visibility: hidden;
        transform: translateY(-20px);
        transition: var(--speed) ease;
      }
      .icons {
        width: 30px;
        height: 30px;
        color: #fff;
        cursor: pointer;
      }
      .icons:nth-child(1) {
        background-color: #0eabf4;
        padding: 11px;
        border-radius: 50%;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        cursor: pointer;
      }
      .icons:nth-child(2) {
        background-color: #5f66cd;
        padding: 11px;
        border-radius: 50%;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        cursor: pointer;
      }
      .icons:nth-child(3) {
        background-color: #d3396d;
        padding: 11px;
        border-radius: 50%;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        cursor: pointer;
      }
      .icons:nth-child(4) {
        background-color: #bf59cf;
        padding: 11px;
        border-radius: 50%;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        cursor: pointer;
      }
      .item {
        width: 100%;
        cursor: pointer;
        input {
          position: absolute;
          opacity: 0;
          left: 2px;
          cursor: pointer;
          width: 20px;
          height: 20px;
        }
      }
    }
  }

  // emoji menu
  .emoji-container {
    box-sizing: border-box;
    width: 100%;
    z-index: 999;
    visibility: ${(props) => (props.showList ? `visible` : `hidden`)};
    @keyframes scaleIn {
      from {
        opacity: 0;
        scale: 0;
      }
      to {
        opacity: 1;
        scale: 1;
      }
    }
    animation: scaleIn 250ms ease;
  }
  .emoji-picker-react {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 320px;
    border-radius: 0px;
    background-color: ${(props) =>
      props.theme === "dark" ? "#2a373f" : "#f0f2f5"};
    box-sizing: border-box;
    border: none;
    box-shadow: none;
    .emoji-group:before {
      background-color: ${(props) =>
        props.theme === "dark" ? "#2a373f" : "#f0f2f5"};
    }
    .emoji-categories {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      gap: 90px;
      height: 65px;
      button.icn-smileys_people {
        background-image: url(${svg1});
        background-size: 25px 25px;
        width: 50px;
        height: 50px;
        filter: ${(props) =>
          props.theme === "dark"
            ? "invert(100%) sepia(1%) saturate(1427%) hue-rotate(171deg) brightness(87%) contrast(87%)"
            : "invert(46%) sepia(21%) saturate(277%) hue-rotate(158deg) brightness(94%) contrast(90%)"};
      }
      button.icn-animals_nature {
        background-image: url(${svg2});
        background-size: 25px 25px;
        width: 50px;
        height: 50px;
        filter: ${(props) =>
          props.theme === "dark"
            ? "invert(100%) sepia(1%) saturate(1427%) hue-rotate(171deg) brightness(87%) contrast(87%)"
            : "invert(46%) sepia(21%) saturate(277%) hue-rotate(158deg) brightness(94%) contrast(90%)"};
      }
      button.icn-food_drink {
        background-image: url(${svg3});
        background-size: 25px 25px;
        width: 50px;
        height: 50px;
        filter: ${(props) =>
          props.theme === "dark"
            ? "invert(100%) sepia(1%) saturate(1427%) hue-rotate(171deg) brightness(87%) contrast(87%)"
            : "invert(46%) sepia(21%) saturate(277%) hue-rotate(158deg) brightness(94%) contrast(90%)"};
      }
      button.icn-travel_places {
        background-image: url(${svg5});
        background-size: 25px 25px;
        width: 50px;
        height: 50px;
        filter: ${(props) =>
          props.theme === "dark"
            ? "invert(100%) sepia(1%) saturate(1427%) hue-rotate(171deg) brightness(87%) contrast(87%)"
            : "invert(46%) sepia(21%) saturate(277%) hue-rotate(158deg) brightness(94%) contrast(90%)"};
      }
      button.icn-activities {
        background-image: url(${svg4});
        background-size: 25px 25px;
        width: 50px;
        height: 50px;
        filter: ${(props) =>
          props.theme === "dark"
            ? "invert(100%) sepia(1%) saturate(1427%) hue-rotate(171deg) brightness(87%) contrast(87%)"
            : "invert(46%) sepia(21%) saturate(277%) hue-rotate(158deg) brightness(94%) contrast(90%)"};
      }
      button.icn-objects {
        background-image: url(${svg6});
        background-size: 25px 25px;
        width: 50px;
        height: 50px;
        filter: ${(props) =>
          props.theme === "dark"
            ? "invert(100%) sepia(1%) saturate(1427%) hue-rotate(171deg) brightness(87%) contrast(87%)"
            : "invert(46%) sepia(21%) saturate(277%) hue-rotate(158deg) brightness(94%) contrast(90%)"};
      }
      button.icn-symbols {
        background-image: url(${svg7});
        background-size: 25px 25px;
        width: 50px;
        height: 50px;
        filter: ${(props) =>
          props.theme === "dark"
            ? "invert(100%) sepia(1%) saturate(1427%) hue-rotate(171deg) brightness(87%) contrast(87%)"
            : "invert(46%) sepia(21%) saturate(277%) hue-rotate(158deg) brightness(94%) contrast(90%)"};
      }
      button.icn-flags {
        background-image: url(${svg8});
        background-size: 25px 25px;
        width: 50px;
        height: 50px;
        filter: ${(props) =>
          props.theme === "dark"
            ? "invert(100%) sepia(1%) saturate(1427%) hue-rotate(171deg) brightness(87%) contrast(87%)"
            : "invert(46%) sepia(21%) saturate(277%) hue-rotate(158deg) brightness(94%) contrast(90%)"};
      }
    }
    div:nth-child(3) {
      max-height: 18%;
      padding: 0px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 22px 0 16px;
      .emoji-search {
        width: 100%;
        margin: 0;
        background-color: ${(props) =>
          props.theme === "dark" ? "#222e35" : "#e9edef"};
        border: none;
        color: ${(props) => (props.theme === "dark" ? "#d9dee0" : "#33383b")};
        ::placeholder {
          color: ${(props) =>
            props.theme === "dark" ? "#ddddddb9" : "#a8a7a7d1"};
          font-size: 14px;
        }
      }
    }
    div:nth-child(4) {
      padding: 0px;
      .emoji-scroll-wrapper {
        padding: 0;
        margin: 0;
        width: 100%;
        &::-webkit-scrollbar {
          width: 8px;
        }
        &::-webkit-scrollbar-thumb {
          background: ${(props) =>
            props.theme === "dark" ? "#435058" : "#9e9d99"};
        }
      }
    }
    .active-category-indicator-wrapper {
      height: 5px;
      position: relative;
      width: 99%;
      .active-category-indicator {
        background-color: #00a884;
        height: 100%;
        border-radius: 0px;
        bottom: 0;
        width: 120px;
        position: relative;
        left: -38px;
        opacity: 1;
        box-sizing: border-box;
      }
    }
  }
`;
