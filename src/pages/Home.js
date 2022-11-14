import React from "react";
import Dashboard from "../components/Dashboard";
import Chat from "../components/Chat";
import { HomeWrapper } from "./Pages.styled";


const Home = () => {
  return (
    <HomeWrapper>
      <Dashboard />
      <Chat />
    </HomeWrapper>
  );
};

export default Home;
