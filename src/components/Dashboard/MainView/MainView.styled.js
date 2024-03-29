import styled from "styled-components";
import searchBtnDark from "../../../assets/search_btn_dark.svg"
import searchBtnLight from "../../../assets/search_btn_light.svg"
// import backBtn from "../../../assets/back_btn.svg"

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const NavWrapper = styled.div`
  height: 40px;
  border-right: ${(props) =>
    props.theme === "dark" ? "1px solid #ffffff2b" : "1px solid #726e6d63"};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  background-color: ${(props) =>
    props.theme === "dark" ? "#2a373f" : "#f0f2f5"};
  .userInfo {
    display: flex;
    align-items: center;
    gap: 10px;
    img {
      height: 40px;
      width: 40px;
      border-radius: 50%;
      object-fit: cover;
    }
    span {
      color: ${(props) => (props.theme === "dark" ? "#ddddddb9" : "#5a6369")};
      font-weight: 500;
      @media (max-width: 1800px) {
        display: none;
      }
    }
  }
  .BtnGroup {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    @media (max-width: 1800px) {
      gap: 0px;
    }
    .btn {
      color: ${(props) => (props.theme === "dark" ? "#aebac1" : "#677780")};
      height: 22px;
      width: 22px;
      padding: 8px;
      cursor: pointer;
    }
    .active {
      border-radius: 50%;
      position: relative;
      background-color: ${(props) =>
        props.theme === "dark" ? "#374248" : "#d9dbde"};
    }
  }
  .dropdownMenu {
    position: absolute;
    width: 140px;
    height: 124px;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    // top: 50px;
    // left: 300px;
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
      padding-left: 12px;
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
`;

export const ListContainer = styled.div`
  height: calc(100% - 116px);
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  background-color: ${(props) =>
    props.theme === "dark" ? "#111b21" : "#ffff"};
  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) => (props.theme === "dark" ? "#435058" : "#9e9d99")};
    border-radius: 2px;
  }
`;

export const SearchWrapper = styled.div`
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.theme === "dark" ? "#111b21" : "#ffff"};
  border-bottom: ${(props) =>
    props.theme === "dark" ? "1px solid #ffffff22" : "1px solid lightgray"};
  padding: 10px 8px;
  input {
    padding: 8px;
    border: none;
    border-radius: 0 6px 6px 0;
    outline: none;
    background-color: ${(props) =>
      props.theme === "dark" ? "#2a373f" : "#f0f2f5"};
    width: 80%;
    color: ${(props) => (props.theme === "dark" ? "#d9dee0" : "#33383b")};
    ::placeholder {
      color: ${(props) => (props.theme === "dark" ? "#ddddddb9" : "#677780")};
      font-weight: 500;
    }
    &:focus{
      &::placeholder{
        opacity: 0;
      }
    }
  }
  .searcBtn {
    background-image: ${(props) => (props.theme === "dark" ? `url(${searchBtnDark})` : `url(${searchBtnLight})`)};
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    border-radius: 6px 0 0 6px;
    background-color: ${(props) =>
      props.theme === "dark" ? "#2a373f" : "#f0f2f5"};
    padding: 17px;
  }
  .filterBtn {
    color: ${(props) => (props.theme === "dark" ? "#aebac1" : "#677780")};
    height: 25px;
    width: 25px;
    cursor: pointer;
    padding-left: 8px;
  }
`;
