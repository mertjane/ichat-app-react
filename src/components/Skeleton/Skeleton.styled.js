import styled from "styled-components";

export const HomeSkeletonWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) =>
    props.theme === "dark" ? "#2a373f" : "#f0f2f5"};
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-items: center;
  justify-content: center;
  gap: 24px;
  .openingIMG {
    width: 40%;
    height: 40%;
  }
  .progress-bar{
    height: 5px;
    width: 335px;
    background-color: #dddd;
    /* .progress{
        width: 0%;
        height: 100%;
        box-sizing: border-box;
        &.done{
            width: 100%;
            
        }
    } */
  }
  .title{
    font-size: 36px;
    color:${(props) => (props.theme === "dark" ? "#d9dee0" : "#969494dd")};
    font-weight: 300;
  }
`;
