import React from "react";
import User from "./User";
import { ListWrapper } from "./Modals.styled";
import { useSelector } from "react-redux";

const List = ({ user }) => {
  const { theme } = useSelector((state) => state.user.userInfo);
  return (
    <ListWrapper theme={theme}>
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
