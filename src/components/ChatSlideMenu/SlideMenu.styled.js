import styled from "styled-components";
import closeBtnLight from "../../assets/close_btn_light.svg";
import closeBtnDark from "../../assets/close_btn.svg";
import blockIcon from "../../assets/block_icon.svg";
import trashIcon from "../../assets/trash_icon.svg";

export const SlideMenuWrapper = styled.div`
  width: 27%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: ${(props) =>
    props.theme === "dark" ? "#111b21" : "#f0f2f5"};
  .header {
    height: 40px;
    display: flex;
    align-items: center; 
    background-color: ${(props) =>
      props.theme === "dark" ? "#2a373f" : "#f0f2f5"};
    padding: 10px 30px;
    gap: 35px;
    border-left: ${(props) =>
      props.theme === "dark" ? "1px solid #ffffff2b" : "1px solid #726e6d63"};
    .closeBtn {
      width: 16px;
      height: 16px;
      background-image: ${(props) =>
        props.theme === "dark"
          ? `url(${closeBtnDark})`
          : `url(${closeBtnLight})`};
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      cursor: pointer;
    }
    p {
      font-size: 15.8px;
      cursor: default;
      color: ${(props) => (props.theme === "dark" ? "#ddddddb9" : "#454647")};
    }
  }
  .body {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    gap: 14px;
    .avatar-section {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 22px 0;
      gap: 8px;
      background-color: ${(props) =>
        props.theme === "dark" ? "#111b21" : "#ffff"};
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
        rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
      img {
        width: 190px;
        height: 190px;
        border-radius: 50%;
        object-fit: contain;
      }
      p {
        font-size: 21px;
        cursor: default;
        color: ${(props) => (props.theme === "dark" ? "#ddddddb9" : "#454647")};
      }
    }
    .about-section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 16px 30px;
      gap: 7px;
      background-color: ${(props) =>
        props.theme === "dark" ? "#111b21" : "#ffff"};
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
        rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    }
    p {
      font-size: 13.4px;
      color: ${(props) => (props.theme === "dark" ? "#96969e" : "#687279")};
    }
    span {
      font-size: 15px;
      color: ${(props) => (props.theme === "dark" ? "#ddddddb9" : "#5a6369")};
    }
    .media-section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 16px 30px;
      gap: 10px;
      background-color: ${(props) =>
        props.theme === "dark" ? "#111b21" : "#ffff"};
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
        rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
      .title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        .indicator {
          display: flex;
          align-items: center;
          gap: 2px;
          width: 45px;
          color: ${(props) => (props.theme === "dark" ? "#96969e" : "none")};
          .icon {
            width: 28px;
            height: 18px;
            color: ${(props) =>
              props.theme === "dark" ? "#ddddddb9" : "#5a6369"};
          }
        }
      }
      .view {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 0 10px;
        .media-item {
          display: flex;
          border-radius: 6px;
          box-shadow: ${(props) =>
              props.theme === "dark" ? "inset 0px 0px 20px #656d72" : "inset 0px 0px 20px #686767"} ;
          width: 100px;
          height: 90px;
          padding: 10px;
          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            background: white;
            cursor: pointer;
          }
        }
      }
    }
  }
  .footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 14px;
    background-color: ${(props) =>
      props.theme === "dark" ? "#111b21" : "#ffff"};
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    .item-box {
      display: flex;
      align-items: center;
      padding: 14px 30px;
      gap: 24px;
      :hover {
        background-color: ${(props) =>
          props.theme === "dark" ? "#2a373f" : "#f0f2f5"};
      }
      cursor: pointer;
      .block-icon {
        width: 24px;
        height: 24px;
        background-image: url(${blockIcon});
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
      }
      .delete-chat-icon {
        width: 24px;
        height: 24px;
        background-image: url(${trashIcon});
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
      }
      p {
        color: #ea0038;
      }
    }
  }
`;
