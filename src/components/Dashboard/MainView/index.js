import React from 'react'
import Navbar from './Navbar';
import Search from "./Search";
import ChatList from "./ChatList";
//import { Wrapper } from '../Dashboard.styled';

const Main = () => {
  return (
    <>
      <Navbar/>
      <Search/>
      <ChatList/>
    </>
  )
}

export default Main