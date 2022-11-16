import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ContentWrapper = styled.section`
  width: 100%;
  height: calc(100% - 124px);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 40px;
  column-gap: 12px;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: small;
   button{
    width: 86px;
    height: 86px;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    border: none;
    cursor: pointer;
    &:hover{
        border: 4px solid #ffff;
    }
    &:active{
        border: 4px solid #282b6c;
    }
   }
`   
