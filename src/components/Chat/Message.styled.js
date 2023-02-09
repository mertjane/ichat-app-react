import styled from "styled-components";
import menuIcon from "../../assets/menu_icon.png";
import menuIconDark from "../../assets/menu_icon_dark.png";
import menuIconLight from "../../assets/menu_icon_light.png";
import menuIconLightOwner from "../../assets/menu_icon-light_owner.png";
import readReceipt from "../../assets/read_receipt.svg";
import readReceiptSingleGray from "../../assets/single_receipt_gray.svg";
import readReceiptDoubleGray from "../../assets/read_receipt_gray.svg";

export const MessageWrapper = styled.div`
  .message {
    display: flex;
    .messageContent {
      max-width: 50%;
      min-height: 30px;
      min-width: 70px;
      white-space: pre-wrap;
      background-color: ${(props) =>
        props.theme === "dark" ? "#2a373f" : "#ffff"};
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-sizing: border-box;
      position: relative;
      border-radius: 0 7px 7px 7px;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
      :hover {
        .messageTime {
          .menu-icon {
            visibility: visible;
            cursor: pointer;
            z-index: 9999;
          }
        }
      }
      .message-text {
        width: 100%;
        font-size: 13px;
        padding: 6px 30px 6px 0;
        margin: 0 8px;
        font-weight: 500;
        color: ${(props) => (props.theme === "dark" ? "#d9dee0" : "#33383b")};
        word-wrap: break-word;
        text-align: left;
        box-sizing: border-box;
      }
      img {
        background-color: #ffff;
        width: 230px;
        height: 250px;
        // padding: 5px 0 0px 0;
        margin: 4px 4px;
        border-radius: 4px;
        position: relative;
        box-sizing: border-box;
        object-fit: cover;
        cursor: pointer;
      }
      .messageTime {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-end;
        position: absolute;
        font-size: 11.7px;
        color: ${(props) => (props.theme === "dark" ? "#c5c9ca" : "#8f8f8f")};
        height: 100%;
        width: max-content;
        justify-content: space-between;
        box-sizing: border-box;
        right: 0;
        .time {
          font-size: 10.5px;
          color: ${(props) => (props.theme === "dark" ? "#c5c9ca" : "#8f8f8f")};
          display: flex;
          flex-direction: column;
          min-width: max-content;
          height: 100%;
          align-items: flex-end;
          justify-content: flex-end;
          bottom: 4px;
          // right: 26px;
          right: 6px;
          position: absolute;
          box-sizing: border-box;
        }
        .menu-icon {
          background-image: ${(props) =>
            props.theme === "dark"
              ? `url(${menuIconDark})`
              : `url(${menuIconLight})`};
          background-repeat: no-repeat;
          background-position-x: 10px;
          background-position-y: -5px;
          background-size: cover;
          box-sizing: border-box;
          cursor: pointer;
          position: absolute;
          display: block;
          width: 46px;
          height: 27px;
          top: 0;
          visibility: hidden;
          box-sizing: border-box;
        }
      }
      .messageDropdown {
        position: fixed;
        width: 180px;
        height: 130px;
        display: flex;
        flex-direction: column;
        border-radius: 4px;
        left: ${({ left }) => left}px;
        top: ${({ top }) => top}px;
        box-sizing: content-box;
        z-index: 9999;
        background-color: ${(props) =>
          props.theme === "dark" ? "#2a373f" : "#ffff"};
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
          rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
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
        .menu-item {
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
    }
    &.owner {
      flex-direction: row-reverse;
      .messageContent {
        background: ${(props) =>
          props.theme === "dark" ? "#005c4b" : "#dcf8c6"};
        border-radius: 7px 0 7px 7px;
        min-width: 80px;
        .message-text {
          font-size: 13px;
          font-weight: 500;
          color: ${(props) => (props.theme === "dark" ? "#d9dee0" : "#33383b")};
          padding: 6px 50px 6px 0;
        }
        .messageTime {
          .time {
            right: 26px;
          }
          .menu-icon {
            background-image: ${(props) =>
              props.theme === "dark"
                ? `url(${menuIcon})`
                : `url(${menuIconLightOwner})`};
            background-repeat: no-repeat;
            background-size: cover;
            background-position-x: 10px;
            background-position-y: -5px;
          }
        }
      }
      .singleTick {
        width: 12px;
        height: 12px;
        background-image: url(${readReceiptSingleGray});
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        position: absolute;
        box-sizing: border-box;
        bottom: 8px;
        right: 8px;
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
        animation: scaleIn 500ms ease;
      }
      .doubleTick {
        background-image: url(${readReceiptDoubleGray});
        width: 17px;
        height: 17px;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        position: absolute;
        box-sizing: border-box;
        bottom: 4px;
        right: 4px;
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
        animation: scaleIn 500ms ease;
        transition-delay: 1s;
      }
      .read-receipt{
        background-image: url(${readReceipt});
        width: 17px;
        height: 17px;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        position: absolute;
        box-sizing: border-box;
        bottom: 4px;
        right: 4px;
      }
    }
  }
`;
