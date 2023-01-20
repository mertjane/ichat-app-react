import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useSelector } from "react-redux";
import { SearchWrapper } from "./Modals.styled";

const Search = ({ onChange }) => {
  const { theme } = useSelector((state) => state.user.userInfo);
  return (
    <SearchWrapper theme={theme}>
      <AiOutlineSearch className="searcBtn" />
      <input
        onChange={onChange}
        type="text"
        placeholder="Search user and add"
      />
    </SearchWrapper>
  );
};

export default Search;
