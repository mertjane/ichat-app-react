import styled from "styled-components";
import svg1 from "../../assets/1.svg";
import svg2 from "../../assets/2.svg";
import svg3 from "../../assets/3.svg";
import svg4 from "../../assets/4.svg";
import svg5 from "../../assets/5.svg";
import svg6 from "../../assets/6.svg";
import svg7 from "../../assets/7.svg";
import svg8 from "../../assets/8.svg";

export const EmojiWrapper = styled.div`
  position: absolute;
  left: 23%;
  bottom: 53%;
  z-index: 9999;
  .bubble {
    width: 40px;
    height: 40px;
    background-color: ${(props) =>
      props.theme === "dark" ? "#2a373f" : "#ffff"};
    position: absolute;
    z-index: -1;
    left: 68px;
    top: 283px;
    transform: rotate(45deg);
    box-sizing: border-box;
    box-shadow: ${(props) =>
      props.theme === "dark"
        ? "none"
        : "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"};
  }
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
  .emoji-picker-react {
    display: flex;
    flex-direction: column;
    width: 400px;
    box-shadow: ${(props) =>
      props.theme === "dark"
        ? "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        : "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"};
    background-color: ${(props) =>
      props.theme === "dark" ? "#2a373f" : "#ffff"};
    border: none;
    .emoji-group:before {
      background-color: ${(props) =>
        props.theme === "dark" ? "#2a373f" : "#ffff"};
    }
    .emoji-categories {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      gap: 28px;
      background-color: ${(props) =>
        props.theme === "dark" ? "#2a373f" : "#f0f2f5"};
      button.icn-smileys_people {
        background-image: url(${svg1});
        filter: ${(props) =>
          props.theme === "dark"
            ? "invert(100%) sepia(1%) saturate(1427%) hue-rotate(171deg) brightness(87%) contrast(87%)"
            : "invert(46%) sepia(21%) saturate(277%) hue-rotate(158deg) brightness(94%) contrast(90%)"};
      }
      button.icn-animals_nature {
        background-image: url(${svg2});
        filter: ${(props) =>
          props.theme === "dark"
            ? "invert(100%) sepia(1%) saturate(1427%) hue-rotate(171deg) brightness(87%) contrast(87%)"
            : "invert(46%) sepia(21%) saturate(277%) hue-rotate(158deg) brightness(94%) contrast(90%)"};
      }
      button.icn-food_drink {
        background-image: url(${svg3});
        filter: ${(props) =>
          props.theme === "dark"
            ? "invert(100%) sepia(1%) saturate(1427%) hue-rotate(171deg) brightness(87%) contrast(87%)"
            : "invert(46%) sepia(21%) saturate(277%) hue-rotate(158deg) brightness(94%) contrast(90%)"};
      }
      button.icn-travel_places {
        background-image: url(${svg5});
        filter: ${(props) =>
          props.theme === "dark"
            ? "invert(100%) sepia(1%) saturate(1427%) hue-rotate(171deg) brightness(87%) contrast(87%)"
            : "invert(46%) sepia(21%) saturate(277%) hue-rotate(158deg) brightness(94%) contrast(90%)"};
      }
      button.icn-activities {
        background-image: url(${svg4});
        filter: ${(props) =>
          props.theme === "dark"
            ? "invert(100%) sepia(1%) saturate(1427%) hue-rotate(171deg) brightness(87%) contrast(87%)"
            : "invert(46%) sepia(21%) saturate(277%) hue-rotate(158deg) brightness(94%) contrast(90%)"};
      }
      button.icn-objects {
        background-image: url(${svg6});
        filter: ${(props) =>
          props.theme === "dark"
            ? "invert(100%) sepia(1%) saturate(1427%) hue-rotate(171deg) brightness(87%) contrast(87%)"
            : "invert(46%) sepia(21%) saturate(277%) hue-rotate(158deg) brightness(94%) contrast(90%)"};
      }
      button.icn-symbols {
        background-image: url(${svg7});
        filter: ${(props) =>
          props.theme === "dark"
            ? "invert(100%) sepia(1%) saturate(1427%) hue-rotate(171deg) brightness(87%) contrast(87%)"
            : "invert(46%) sepia(21%) saturate(277%) hue-rotate(158deg) brightness(94%) contrast(90%)"};
      }
      button.icn-flags {
        background-image: url(${svg8});
        filter: ${(props) =>
          props.theme === "dark"
            ? "invert(100%) sepia(1%) saturate(1427%) hue-rotate(171deg) brightness(87%) contrast(87%)"
            : "invert(46%) sepia(21%) saturate(277%) hue-rotate(158deg) brightness(94%) contrast(90%)"};
      }
    }
    div:nth-child(3) {
      max-height: 18%;
      padding: 0 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      .emoji-search {
        // width: 95%;
        // padding: 10px;
        // margin: 0;

        width: 100%;
        margin: 0;
        background-color: ${(props) =>
          props.theme === "dark" ? "#222e35" : "#ffff"};
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
      padding: 0 0 0 0;
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
          border-radius: 0px;
        }
      }
    }
    .active-category-indicator-wrapper {
      display: none;
    }
  }
`;

export const EmojiWrapper2 = styled.div`
  position: absolute;
  left: 23%;
  bottom: 31%;
  z-index: 9999;
  .bubble {
    width: 40px;
    height: 40px;
    background-color: ${(props) =>
      props.theme === "dark" ? "#2a373f" : "#ffff"};
    position: absolute;
    z-index: -1;
    left: 68px;
    top: 283px;
    transform: rotate(45deg);
    box-sizing: border-box;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
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
  .emoji-picker-react {
    display: flex;
    flex-direction: column;
    width: 400px;
    box-shadow: ${(props) =>
      props.theme === "dark"
        ? "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        : "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"};
    background-color: ${(props) =>
      props.theme === "dark" ? "#2a373f" : "#ffff"};
    border: none;
    .emoji-group:before {
      background-color: ${(props) =>
        props.theme === "dark" ? "#2a373f" : "#ffff"};
    }
    .emoji-categories {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      gap: 28px;
      background-color: ${(props) =>
        props.theme === "dark" ? "#2a373f" : "#f0f2f5"};
      button.icn-smileys_people {
        background-image: url(${svg1});
        filter: ${(props) =>
          props.theme === "dark"
            ? "invert(100%) sepia(1%) saturate(1427%) hue-rotate(171deg) brightness(87%) contrast(87%)"
            : "invert(46%) sepia(21%) saturate(277%) hue-rotate(158deg) brightness(94%) contrast(90%)"};
      }
      button.icn-animals_nature {
        background-image: url(${svg2});
        filter: ${(props) =>
          props.theme === "dark"
            ? "invert(100%) sepia(1%) saturate(1427%) hue-rotate(171deg) brightness(87%) contrast(87%)"
            : "invert(46%) sepia(21%) saturate(277%) hue-rotate(158deg) brightness(94%) contrast(90%)"};
      }
      button.icn-food_drink {
        background-image: url(${svg3});
        filter: ${(props) =>
          props.theme === "dark"
            ? "invert(100%) sepia(1%) saturate(1427%) hue-rotate(171deg) brightness(87%) contrast(87%)"
            : "invert(46%) sepia(21%) saturate(277%) hue-rotate(158deg) brightness(94%) contrast(90%)"};
      }
      button.icn-travel_places {
        background-image: url(${svg5});
        filter: ${(props) =>
          props.theme === "dark"
            ? "invert(100%) sepia(1%) saturate(1427%) hue-rotate(171deg) brightness(87%) contrast(87%)"
            : "invert(46%) sepia(21%) saturate(277%) hue-rotate(158deg) brightness(94%) contrast(90%)"};
      }
      button.icn-activities {
        background-image: url(${svg4});
        filter: ${(props) =>
          props.theme === "dark"
            ? "invert(100%) sepia(1%) saturate(1427%) hue-rotate(171deg) brightness(87%) contrast(87%)"
            : "invert(46%) sepia(21%) saturate(277%) hue-rotate(158deg) brightness(94%) contrast(90%)"};
      }
      button.icn-objects {
        background-image: url(${svg6});
        filter: ${(props) =>
          props.theme === "dark"
            ? "invert(100%) sepia(1%) saturate(1427%) hue-rotate(171deg) brightness(87%) contrast(87%)"
            : "invert(46%) sepia(21%) saturate(277%) hue-rotate(158deg) brightness(94%) contrast(90%)"};
      }
      button.icn-symbols {
        background-image: url(${svg7});
        filter: ${(props) =>
          props.theme === "dark"
            ? "invert(100%) sepia(1%) saturate(1427%) hue-rotate(171deg) brightness(87%) contrast(87%)"
            : "invert(46%) sepia(21%) saturate(277%) hue-rotate(158deg) brightness(94%) contrast(90%)"};
      }
      button.icn-flags {
        background-image: url(${svg8});
        filter: ${(props) =>
          props.theme === "dark"
            ? "invert(100%) sepia(1%) saturate(1427%) hue-rotate(171deg) brightness(87%) contrast(87%)"
            : "invert(46%) sepia(21%) saturate(277%) hue-rotate(158deg) brightness(94%) contrast(90%)"};
      }
    }
    div:nth-child(3) {
      max-height: 18%;
      padding: 0 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      .emoji-search {
        width: 95%;
        padding: 10px;
        margin: 0;
        background-color: ${(props) =>
          props.theme === "dark" ? "#222e35" : "#ffff"};
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
      padding: 0 0 0 0;
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
          border-radius: 0px;
        }
      }
    }
    .active-category-indicator-wrapper {
      display: none;
    }
  }
`;
