import styled from "styled-components";

import downloadBtn from "../../assets/download_btn.svg";
import closeBtn from "../../assets/close_btn.svg";
import forwardMsgBtn from "../../assets/forward_message_btn.svg";
import emojiBtn from "../../assets/emoji_btn.svg";
import starBtn from "../../assets/add_star.svg";
import speechBtn from "../../assets/speech_btn.svg";
import prevBtn from "../../assets/prev_btn.svg";
import forwardBtn from "../../assets/forward_btn.svg";
import downloadBtnLight from "../../assets/download_btn_light.svg";
import closeBtnLight from "../../assets/close_btn_light.svg";
import forwardMsgBtnLight from "../../assets/forward_message_btn_light.svg";
import emojiBtnLight from "../../assets/emoji_btn_light.svg";
import starBtnLight from "../../assets/add_star_light.svg";
import speechBtnLight from "../../assets/speech_btn_light.svg";

export const Overlay = styled.div`
  background-color: ${(props) =>
    props.theme === "dark" ? "#111b21f6" : "#fefefff6"};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 99999;
  .header {
    width: 100%;
    height: 8%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    background-color: ${(props) =>
      props.theme === "dark" ? "#111b21f6" : "#ffffff"};
    .message-info {
      height: 100%;
      display: flex;
      align-items: center;
      padding: 0 20px;
      gap: 10px;
      .avatar {
        height: 45px;
        width: 45px;
        border-radius: 50%;
        object-fit: contain;
      }
      p {
        display: flex;
        flex-direction: column;
        font-size: 14.2px;
        font-weight: 500;
        color: ${(props) => (props.theme === "dark" ? "#d9dee0" : "#111b21d3")};
        gap: 4px;
        span {
          font-size: 11.5px;
          color: ${(props) =>
            props.theme === "dark" ? "#e6e6e69d" : "#677780df"};
          font-weight: 400;
        }
      }
    }
    .btn-group {
      height: 100%;
      display: flex;
      align-items: center;
      gap: 7px;
      padding: 0 20px;
      .btn {
        height: 40px;
        width: 40px;
      }
      .btn:nth-child(1) {
        background-image: ${(props) =>
          props.theme === "dark"
            ? `url(${speechBtn})`
            : `url(${speechBtnLight})`};
        background-repeat: no-repeat;
        background-position: center;
        cursor: pointer;
      }
      .btn:nth-child(2) {
        background-image: ${(props) =>
          props.theme === "dark" ? `url(${starBtn})` : `url(${starBtnLight})`};
        background-repeat: no-repeat;
        background-position: center;
        cursor: pointer;
      }
      .btn:nth-child(3) {
        background-image: ${(props) =>
          props.theme === "dark"
            ? `url(${emojiBtn})`
            : `url(${emojiBtnLight})`};
        background-repeat: no-repeat;
        background-position: center;
        cursor: pointer;
      }
      .btn:nth-child(4) {
        background-image: ${(props) =>
          props.theme === "dark"
            ? `url(${forwardMsgBtn})`
            : `url(${forwardMsgBtnLight})`};
        background-repeat: no-repeat;
        background-position: center;
        cursor: pointer;
      }
      .btn:nth-child(5) {
        background-image: ${(props) =>
          props.theme === "dark"
            ? `url(${downloadBtn})`
            : `url(${downloadBtnLight})`};
        background-repeat: no-repeat;
        background-position: center;
        cursor: pointer;
      }
      .btn:nth-child(6) {
        background-image: ${(props) =>
          props.theme === "dark"
            ? `url(${closeBtn})`
            : `url(${closeBtnLight})`};
        background-repeat: no-repeat;
        background-position: center;
        cursor: pointer;
      }
    }
  }
  .body {
    height: 77%;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    .prev-wrapper {
      width: 10%;
      height: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 40px;
      .btn {
        width: 50px;
        height: 50px;
        background-image: url(${prevBtn});
        background-repeat: no-repeat;
        background-position: center;
        background-color: ${(props) =>
          props.theme === "dark" ? "#5b6469" : "#abafb1"}; 
        border-radius: 50%;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        cursor: pointer;
        &.active {
          opacity: 1;
        }
        &.inactive {
          opacity: 0.5;
          cursor: not-allowed;
        }
      }
    }
    .view-wrapper {
      width: 80%;
      height: 100%;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      .chat-media {
        min-width: 600px;
        height: auto;
        border-radius: 0;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
      }
    }
    .forward-wrapper {
      width: 10%;
      height: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      padding-right: 40px;
      .btn {
        width: 50px;
        height: 50px;
        background-image: url(${forwardBtn});
        background-repeat: no-repeat;
        background-position: center;
        background-color: ${(props) =>
          props.theme === "dark" ? "#5b6469" : "#abafb1"}; 
        border-radius: 50%;
        cursor: pointer;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        &.active {
          opacity: 1;
        }
        &.inactive {
          opacity: 0.5;
          cursor: not-allowed;
        }
      }
    }
  }
  .footer {
    height: 15%;
    border-top: ${(props) =>
        props.theme === "dark" ? "1px solid #353f44d1" : "1px solid #dddd"};
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
    overflow-x: auto;
    gap: 8px;
    padding-right: 20px;
    &::-webkit-scrollbar {
      height: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${(props) =>
        props.theme === "dark" ? "#363f44bc" : "#9e9d99"};
    }
    .archive-item {
      min-width: 85px;
      width: 85px;
      height: 60%;
      border-radius: 10px;
      border: ${(props) =>
        props.theme === "dark" ? "6px solid #2a3942" : "6px solid #d8dde1"};
      display: flex;
      align-items: center;
      justify-content: center;
      .archive-media {
        background-color: #ffff;
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        object-fit: contain;
        cursor: pointer;
      }
      &.active {
        width: 75px;
        height: 50%;
        border-radius: 10px;
        border: ${(props) =>
        props.theme === "dark" ? "4px solid #667781" : "4px solid #d8dde1"};
        display: flex;
        align-items: center;
      }
    }
  }
`;
