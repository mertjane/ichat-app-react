import React from "react";
import User from "./User";
import { ListWrapper } from "./Modals.styled";

const List = ({ user }) => {
  return (
    <ListWrapper>
      {user?.map((item) => (
        <User
          user={user}
          key={item._id}
          avatar={item.avatar}
          username={item.username}
        />
      ))}
    </ListWrapper>
  );
};

export default List;
