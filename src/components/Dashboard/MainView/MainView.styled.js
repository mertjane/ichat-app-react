import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const NavWrapper = styled.div`
  height: 40px;
  border-right: 1px solid lightgray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
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
      font-weight: 500;
    }
  }
  .BtnGroup {
    display: flex;
    gap: 20px;
    .btn {
      color: #677780;
      height: 25px;
      width: 25px;
      cursor: pointer;
    }
  }
  .dropdownMenu {
    position: absolute;
    width: 140px;
    height: 124px;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    left: 360px;
    top: 50px;
    z-index: 9999;
    background-color: #ffff;
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
      animation: dropdownIn 0.3s;
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
      color: #54656f;
      cursor: pointer;
      &:hover {
        background-color: #f5f2f2;
      }
    }
  }
`;

export const ListContainer = styled.div`
  height: calc(100% - 125px);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-thumb {
    background: #e0e0e0;
    border-radius: 2px;
  }
`;

export const SearchWrapper = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-bottom: 1px solid lightgray;
  padding: 12px 8px;
  input {
    padding: 8px;
    border: none;
    border-radius: 0 6px 6px 0;
    outline: none;
    background-color: #f0f2f5;
    width: 80%;
  }
  .searcBtn {
    color: #677780;
    cursor: pointer;
    border-radius: 6px 0 0 6px;
    background-color: #f0f2f5;
    padding: 9px;
  }
  .filterBtn {
    color: #677780;
    height: 25px;
    width: 25px;
    cursor: pointer;
    padding-left: 8px;
  }
`;
