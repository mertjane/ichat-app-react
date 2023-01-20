import styled from "styled-components";

export const ConversationWrapper = styled.div`
  min-height: 69px;
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: ${(props) =>
    props.theme === "dark" ? "#111b21" : "#ffff"};
  padding: 4px 0 0 12px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.theme === "dark" ? "#2a373f" : "#f0f2f5"}; 
    .wrapper {
      .chatTime {
        .unread-wrapper {
          .notification {
            position: relative;
            right: 0px;
            transition: 180ms all ease;
          }
          .optionBtn {
            visibility: visible;
          }
        }
      }
    }
  }
  img {
    height: 45px;
    width: 45px;
    border-radius: 50%;
    object-fit: cover;
  }
  .wrapper {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    padding-right: 12px;
    border-bottom: ${(props) =>
      props.theme === "dark" ? "1px solid #ffffff22" : "1px solid #dddd"};
    .chatInfo {
      width: 75%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 6px;
      gap: 2px;
      p {
        font-size: 16px;
        font-weight: 500;
        color: ${(props) => (props.theme === "dark" ? "#d9dee0" : "#111b21d3")};
      }
      span {
        font-size: 13px;
        color: ${(props) => (props.theme === "dark" ? "#96969e" : "#677780")};
      }
    }
    .chatTime {
      width: 25%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: center;
      padding-right: 8px;
      gap: 3px;
      span {
        font-size: 12px;
        color: ${(props) => (props.theme === "dark" ? "#96969e" : "#677780")};
      }
      .unread-wrapper {
        display: flex;
        align-items: center;
        gap: 5px;
        .notification {
          position: relative;
          right: -28px;
          box-sizing: content-box;
          background-color: ${(props) =>
            props.theme === "dark" ? "#128C7E" : "#25D366"};
          color: ${(props) => (props.theme === "dark" ? "black" : "#fff")};
          font-weight: 700;
          border-radius: 50%;
          width: 17px;
          padding: 3px;
          text-align: center;
        }
        .optionBtn {
          color: ${(props) => (props.theme === "dark" ? "#aebac1" : "#677780")};
          cursor: pointer;
          position: relative;
          width: 25px;
          height: 25px;
          visibility: hidden;
        }
      }
      .chatDropdown {
        position: absolute;
        width: 190px;
        height: 190px;
        display: flex;
        flex-direction: column;
        border-radius: 4px;
        left: 380px;
        top: 170px;
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
              props.theme === "dark" ? "#111b21" : "#f5f2f2"};
          }
        }
      }
    }
  }
`;
