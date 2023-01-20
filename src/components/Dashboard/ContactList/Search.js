import React from "react";
import { SearchWrapper } from "./Contacts.styled";
import { AiOutlineSearch } from "react-icons/ai";
import { useSelector } from "react-redux";

const Search = ({ onChange }) => {
  const { theme } = useSelector((state) => state.user.userInfo);
  return (
    <SearchWrapper theme={theme}>
      <AiOutlineSearch className="searcBtn" />
      <input
        onChange={onChange}
        type="text"
        placeholder="Search or start a new chat"
      />
    </SearchWrapper>
  );
};

export default Search;
