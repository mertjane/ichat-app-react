import React from "react";
import { SearchWrapper } from "./Dashboard.styled";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFilter } from "react-icons/bs";

const Search = () => {
  return (
    <SearchWrapper>
      <AiOutlineSearch className="searcBtn" />
      <input type="text" placeholder="Search or start a new chat" />
      <BsFilter className="filterBtn" />
    </SearchWrapper>
  );
};

export default Search;
