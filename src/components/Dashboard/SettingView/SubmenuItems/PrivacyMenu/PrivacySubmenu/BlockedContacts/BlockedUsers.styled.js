import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  .contentWrapper {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 18px 30px;
    cursor: pointer;
    background-color: #ffff;
    border-bottom: 1px solid #dddd;
    &:hover {
      background-color: #dddd;
    }
    .icon {
      color: #677780;
      height: 24px;
      width: 24px;
    }
  }
  .listWrapper {
    overflow: auto;
    max-height: 585px;
    background-color: #ffff;
    &::-webkit-scrollbar {
      width: 7px;
    }
    &::-webkit-scrollbar-thumb {
      background: #969595a2;
      border-radius: 2px;
    }
  }
  .infoWrapper {
    height: 100px;
    padding: 16px 30px;
    span {
      color: #949292dd;
      font-size: 13.4px;
      font-weight: 500;
    }
  }
`;
