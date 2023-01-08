import React from "react";
import User from "./User";
import { ListWrapper } from "./Contacts.styled";
import { useSelector } from "react-redux";

const List = ({ query, setCurrentChat }) => {
  const { contactList } = useSelector((state) => state.contacts);

  return (
    <ListWrapper>
        {contactList
        .filter((user) => user.name.toLowerCase().includes(query))
        ?.map((user) => (
          <User
            setCurrentChat={setCurrentChat}
            user={user}
            key={user._id}
            avatar={user.avatar}
            name={user.name}
            about={user.about}
          />
      ))}
    </ListWrapper>
  );
};

export default List;
