import { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../SettingView/Header";
import Search from "./Search";
import List from "./List";
import { Wrapper } from "./Contacts.styled";

const Contacts = ({ setCurrentChat }) => {
  const { theme } = useSelector((state) => state.user.userInfo);
  const [query, setQuery] = useState("");

  return (
    <Wrapper theme={theme}>
      <Header />
      <Search onChange={(e) => setQuery(e.target.value)} />
      <List setCurrentChat={setCurrentChat} query={query} />
    </Wrapper>
  );
};

export default Contacts;
