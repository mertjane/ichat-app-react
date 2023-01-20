import styled from "styled-components";
import chatBack from "../../assets/lightback.png";
import chatDarkBack from "../../assets/darkBack.png";
import svg1 from "../../assets/1.svg";
import svg2 from "../../assets/2.svg";
import svg3 from "../../assets/3.svg";
import svg4 from "../../assets/4.svg";
import svg5 from "../../assets/5.svg";
import svg6 from "../../assets/6.svg";
import svg7 from "../../assets/7.svg";
import svg8 from "../../assets/8.svg";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
export const NavWrapper = styled.nav`
  height: 40px;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .contactInfo {
    display: flex;
    align-items: center;
    gap: 12px;
    img {
      height: 40px;
      width: 40px;
      border-radius: 50%;
      object-fit: cover;
    }
    .displayName {
      font-size: 16px;
      font-weight: 500;
      color: ${(props) => (props.theme === "dark" ? "#d9dee0" : "#111b21d3")};
      display: flex;
      flex-direction: column;
      .status-text {
        font-size: 14px;
        font-weight: 500;
        color: ${(props) => (props.theme === "dark" ? "#96969e" : "#555555dd")};
      }
    }
  }
  .btnGroup {
    width: auto;
    display: flex;
    gap: 12px;
    .btn {
      color: ${(props) => (props.theme === "dark" ? "#8696a0" : "#677780")};
      height: 25px;
      width: 25px;
      cursor: pointer;
    }
  }
`;

export const ChatBoxContainer = styled.div`
  height: 100%;
  // background-color: #1d2326;
  background-image: ${(props) =>
    props.theme === "dark" ? `url(${chatDarkBack})` : `url(${chatBack})`};
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 4px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) =>
    props.theme === "dark" ? "#435058" : "#9e9d99"};
  }
  .loader {
    width: max-content;
    align-self: center;
  }
`;

export const MessageWrapper = styled.div`
  .message {
    display: flex;
    .messageContent {
      max-width: 50%;
      flex-wrap: wrap;
      background-color: ${(props) =>
        props.theme === "dark" ? "#2a373f" : "#ffff"};
      display: flex;
      align-items: center;
      gap: 24px;
      padding: 8px 20px;
      border-radius: 0 7px 7px 7px;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
      :hover {
        .menu-icon {
          visibility: visible;
        }
        span {
          visibility: hidden;
        }
      }
      p {
        font-size: 13px;
        font-weight: 500;
        color: ${(props) => (props.theme === "dark" ? "#d9dee0" : "#33383b")};
      }
      span {
        font-size: 11.7px;
        color: ${(props) => (props.theme === "dark" ? "#c5c9ca" : "#8f8f8f")};
        position: relative;
        top: 2px;
        display: flex;
        align-items: center;
        .menu-icon {
          color: ${(props) => (props.theme === "dark" ? "#aebac1" : "#677780")};
          box-sizing: border-box;
          cursor: pointer;
          position: absolute;
          width: 27px;
          height: 27px;
          left: 22px;
          visibility: hidden;
        }
      }
      &.owner {
        background-color: #f0d9ff;
      }
      .messageDropdown {
        position: absolute;
        width: 180px;
        height: 130px;
        display: flex;
        flex-direction: column;
        border-radius: 4px;
        left: 535px;
        top: 510px;
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
        p {
          font-size: 13px;
          font-weight: 500;
          color: ${(props) => (props.theme === "dark" ? "#d9dee0" : "#33383b")};
        }
      }
    }
  }
`;

export const InputWrapper = styled.div`
  // height: 40px;
  height: ${(props) => (props.showList ? `700px` : `50px`)};
  width: auto;
  padding: 10px 16px;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.showList ? `flex-end` : `center`)};
  gap: 24px;
  .inputGroup {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 12px;
    box-sizing: border-box;
    .btn {
      display: flex;
      color: ${(props) => (props.theme === "dark" ? "#aebac1" : "#677780")};
      height: 25px;
      width: 25px;
      cursor: pointer;
    }
    .textGroup {
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
      gap: 24px;
      input {
        padding: 14px;
        width: 85%;
        border: none;
        border-radius: 8px;
        outline: none;
        background-color: ${(props) =>
          props.theme === "dark" ? "#404d55" : "#fffff"};
        color: ${(props) => (props.theme === "dark" ? "#d9dee0" : "#33383b")};
        ::placeholder {
          color: ${(props) => (props.theme === "dark" ? "#96969e" : "#677780")};
          font-weight: 500;
        }
      }
      button {
        padding: 6px 16px;
        border: none;
        background-color: #128c7e;
        color: white;
        font-size: 18px;
        font-weight: 600;
        cursor: pointer;
      }
    }
  }
  .emoji-container {
    // position: absolute;
    // left: 27%;
    // bottom: 6.9%;
    z-index: 9999;
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
    background: #f0f2f5;
    box-sizing: border-box;
    // box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    .emoji-group:before {
      background-color: #f0f2f5;
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
      }
      button.icn-animals_nature {
        background-image: url(${svg2});
        background-size: 25px 25px;
        width: 50px;
        height: 50px;
      }
      button.icn-food_drink {
        background-image: url(${svg3});
        background-size: 25px 25px;
        width: 50px;
        height: 50px;
      }
      button.icn-travel_places {
        background-image: url(${svg5});
        background-size: 25px 25px;
        width: 50px;
        height: 50px;
      }
      button.icn-activities {
        background-image: url(${svg4});
        background-size: 25px 25px;
        width: 50px;
        height: 50px;
      }
      button.icn-objects {
        background-image: url(${svg6});
        background-size: 25px 25px;
        width: 50px;
        height: 50px;
      }
      button.icn-symbols {
        background-image: url(${svg7});
        background-size: 25px 25px;
        width: 50px;
        height: 50px;
      }
      button.icn-flags {
        background-image: url(${svg8});
        background-size: 25px 25px;
        width: 50px;
        height: 50px;
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
        background-color: #e9edef;
        border: none;
        ::placeholder {
          color: #a8a7a7d1;
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
          background: #c4c2c2;
        }
      }
    }
    .active-category-indicator-wrapper {
      display: none;
    }
  }
`;
