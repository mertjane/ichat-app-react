import { useState, useEffect } from "react";
import { getContacts } from "../../../features/contacts/services";
import { useSelector, useDispatch } from "react-redux";
import Header from "../SettingView/Header";
import Search from "./Search";
import List from "./List";
import { Wrapper } from "./Contacts.styled";

const Contacts = ({ setCurrentChat }) => {
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.auth);
  const [contactInfo] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getContacts({ contactInfo, userId }, dispatch);
  }, [userId, contactInfo, dispatch]);

  return (
    <Wrapper>
      <Header />
      <Search onChange={(e) => setQuery(e.target.value)} />
      <List query={query} />
    </Wrapper>
  );
};

export default Contacts;
