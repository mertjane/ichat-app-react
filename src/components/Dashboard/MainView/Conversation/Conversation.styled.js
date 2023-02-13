import styled, { css } from "styled-components";

export const activeStyles = css`
  background-color: ${(props) =>
    props.theme === "dark" ? "#2a373f" : "#f0f2f5"};
`;

export const inactiveStyles = css`
  background-color: ${(props) =>
    props.theme === "dark" ? "#111b21" : "#ffff"};
`;

export const ConversationWrapper = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  background-color: ${(props) =>
    props.theme === "dark" ? "#111b21" : "#ffff"};
  // padding: 4px 0 0 12px;
  cursor: pointer;
  background-color: ${(props) =>
    props.theme === "dark" && props.isActive && "#2a373f"};
  background-color: ${(props) =>
    props.theme === "open" && props.isActive && "#f0f2f5"};
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
  .image-wrapper {
    height: 100%;
    width: 18%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    @media (max-width: 1800px) {
      width: 20%;
    }
    img {
      height: 50px;
      width: 50px;
      border-radius: 50%;
      object-fit: cover;
    }
  }
  .wrapper {
    height: 100%;
    width: 82%;
    box-sizing: border-box;
    display: flex;
    padding-right: 12px;
    border-bottom: ${(props) =>
      props.theme === "dark" ? "1px solid #ffffff22" : "1px solid #dddd"};
    @media (max-width: 1800px) {
      width: 80%;
    }
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
        color: ${(props) => (props.theme === "dark" ? "#e6e6e69d" : "#677780")};
        font-weight: 400;
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
        font-size: 11.6px;
        color: ${(props) => (props.theme === "dark" ? "#e6e6e69d" : "#677780")};
        font-weight: 400;
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
          min-width: 17px;
          max-width: min-content;
          padding: 3px;
          text-align: center;
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
        @media (max-width: 1800px) {
          left: 304px;
          top: ${({ top }) => top}px;
        }
        top: ${({ top }) => top}px;
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
