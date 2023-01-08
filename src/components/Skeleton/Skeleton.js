import React from "react";
import { HomeSkeletonWrapper } from "./Skeleton.styled";
import ProgressBar from "./ProgressBar";
import svg from "../../assets/loader.svg";

const Skeleton = ({ type }) => {
  const HomeSkeleton = () => {
    return (
      <HomeSkeletonWrapper>
        <img src={svg} alt="opening" className="openingIMG" />
        <ProgressBar done="100" />
        <h5 className="title">iChat</h5>
      </HomeSkeletonWrapper>
    );
  };
  return <HomeSkeleton />;
};

export default Skeleton;
