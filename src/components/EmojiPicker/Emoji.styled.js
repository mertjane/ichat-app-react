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
    background-color: #ffff;
    position: absolute;
    z-index: -1;
    left: 68px;
    top: 290px;
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
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    .emoji-categories {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      gap: 28px;
      button.icn-smileys_people {
        background-image: url(${svg1});
      }
      button.icn-animals_nature {
        background-image: url(${svg2});
      }
      button.icn-food_drink {
        background-image: url(${svg3});
      }
      button.icn-travel_places {
        background-image: url(${svg5});
      }
      button.icn-activities {
        background-image: url(${svg4});
      }
      button.icn-objects {
        background-image: url(${svg6});
      }
      button.icn-symbols {
        background-image: url(${svg7});
      }
      button.icn-flags {
        background-image: url(${svg8});
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
          background: #c4c2c2;
          border-radius: 6px;
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
    background-color: #ffff;
    position: absolute;
    z-index: -1;
    left: 68px;
    top: 290px;
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
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    .emoji-categories {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      gap: 28px;
      button.icn-smileys_people {
        background-image: url(${svg1});
      }
      button.icn-animals_nature {
        background-image: url(${svg2});
      }
      button.icn-food_drink {
        background-image: url(${svg3});
      }
      button.icn-travel_places {
        background-image: url(${svg5});
      }
      button.icn-activities {
        background-image: url(${svg4});
      }
      button.icn-objects {
        background-image: url(${svg6});
      }
      button.icn-symbols {
        background-image: url(${svg7});
      }
      button.icn-flags {
        background-image: url(${svg8});
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
          background: #c4c2c2;
          border-radius: 6px;
        }
      }
    }
    .active-category-indicator-wrapper {
      display: none;
    }
  }
`;
