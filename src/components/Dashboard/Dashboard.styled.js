import styled from "styled-components";

export const Wrapper = styled.div`
  flex: 1;
`;

export const NavWrapper = styled.nav`
  height: 40px;
  border-right: 1px solid lightgray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
  div {
    display: flex;
    gap: 18px;
    .btn {
      color: #677780;
      height: 25px;
      width: 25px;
      cursor: pointer;
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

export const ChatWrapper = styled.div`
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #ffff;
  border-bottom: 1px solid lightgray;
  cursor: pointer;
  &:hover {
    background-color: #f0f2f5;
    .chatTime {
      .optionBtn {
        visibility: visible;
      }
    }
  }
  img {
    height: 45px;
    width: 45px;
    border-radius: 50%;
    object-fit: cover;
  }
  .chatInfo {
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 1px 4px;
    span {
      font-size: 18px;
      font-weight: 500;
      color: #111b21d3;
    }
    p {
      font-size: 14px;
      color: #677780;
    }
  }
  .chatTime {
    padding: 1px 4px;
    span {
      font-size: 12px;
      color: #677780;
    }
    .optionBtn {
      color: #677780;
      cursor: pointer;
      position: relative;
      left: 26px;
      width: 25px;
      height: 25px;
      visibility: hidden;
    }
  }
`;