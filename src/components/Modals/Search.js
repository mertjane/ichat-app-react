import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { SearchWrapper } from "./Modals.styled";

const Search = ({onChange}) => {
  return (
    <SearchWrapper>
      <AiOutlineSearch className="searcBtn" />
      <input onChange={onChange} type="text" placeholder="Search user and add" />
    </SearchWrapper>
  );
};

export default Search;
