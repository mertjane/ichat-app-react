import React from "react";
import { SearchWrapper } from "./Contacts.styled";
import { AiOutlineSearch } from "react-icons/ai";

const Search = ({onChange}) => {
  
  return (
    <SearchWrapper>
      <AiOutlineSearch className="searcBtn" />
      <input onChange={onChange} type="text" placeholder="Search or start a new chat"/>
    </SearchWrapper>
  );
};

export default Search;
