import React from "react";
import { useSelector } from "react-redux";
import {SearchWrapper} from "./MainView.styled"
import { AiOutlineSearch } from "react-icons/ai";
import { BsFilter } from "react-icons/bs";

const Search = ({onChange}) => {
  const { theme } = useSelector((state) => state.user.userInfo);
  return (
    <SearchWrapper theme={theme}>
      <AiOutlineSearch className="searcBtn" />
      <input onChange={onChange} type="text" placeholder="Search or start a new chat" />
      <BsFilter className="filterBtn" />
    </SearchWrapper>
  );
};

export default Search;
