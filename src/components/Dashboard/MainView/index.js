import React from 'react'
import Navbar from './Navbar';
import Search from "./Search";
import ChatList from "./ChatList";
import { Wrapper } from './MainView.styled';

const Main = () => {
  return (
    <Wrapper>
      <Navbar/>
      <Search/>
      <ChatList/>
    </Wrapper>
  )
}

export default Main