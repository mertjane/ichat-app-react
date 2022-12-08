import React from "react";
import { UsersWrapper } from "./Contacts.styled";

const User = ({ _id, avatar, name, about }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <UsersWrapper key={_id}>
      <img src={avatar ? PF + avatar : PF + "user.png"} alt="avatar" />
      <div className="user-info">
        <label>{name}</label>
        <span>{about}</span>
      </div>
    </UsersWrapper>
  );
};

export default User;
