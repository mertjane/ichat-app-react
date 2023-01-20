import { useState, useEffect } from "react";
import { getContacts } from "../../../features/contacts/services";
import { useSelector, useDispatch } from "react-redux";
import Header from "../SettingView/Header";
import Search from "./Search";
import List from "./List";
import { Wrapper } from "./Contacts.styled";

const Contacts = ({setCurrentChat}) => {
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.auth);
  const { theme } = useSelector((state) => state.user.userInfo);
  const [query, setQuery] = useState("");

  useEffect(() => {
    dispatch(getContacts({ userId }));
  }, [userId, dispatch]);

  return (
    <Wrapper theme={theme}>
      <Header />
      <Search onChange={(e) => setQuery(e.target.value)} />
      <List setCurrentChat={setCurrentChat} query={query} />
    </Wrapper>
  );
};

export default Contacts;
