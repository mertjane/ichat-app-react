import React from "react";
import { HomeSkeletonWrapper } from "./Skeleton.styled";
import { useSelector } from "react-redux";
import ProgressBar from "./ProgressBar";
import svg from "../../assets/loader.svg";

const Skeleton = ({ type }) => {
  const { theme } = useSelector((state) => state.user.userInfo);
  
  const HomeSkeleton = () => {
    return (
      <HomeSkeletonWrapper theme={theme}>
        <img src={svg} alt="opening" className="openingIMG" />
        <ProgressBar done="100" />
        <h5 className="title">iChat</h5>
      </HomeSkeletonWrapper>
    );
  };
  return <HomeSkeleton />;
};

export default Skeleton;
