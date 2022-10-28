import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import ChatList from "./ChatList";
import { Wrapper } from "./Dashboard.styled";

const Dashboard = () => {
  return (
    <Wrapper>
      <Navbar />
      <Search />
      <ChatList />
    </Wrapper>
  );
};

export default Dashboard;
