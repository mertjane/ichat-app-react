import React from "react";
import { BeatLoader } from "react-spinners";
import styled from "styled-components";

export const LoadingWrapper = styled.p`
  text-align: center;
`;

const Loading = () => {
  return (
    <LoadingWrapper>
      <BeatLoader color="#EC255A" size={7} />
    </LoadingWrapper>
  );
};

export default Loading;
