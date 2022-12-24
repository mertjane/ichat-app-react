import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDetails } from "../features/user/services";
import { getConversations } from "../features/conversation/services";
import { HomeWrapper } from "./Pages.styled";
import Dashboard from "../components/Dashboard";

const Home = () => {
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.auth);
  const [userInfo] = useState({});

  useEffect(() => {
    getDetails({ userInfo, userId }, dispatch);
  }, [userInfo, userId, dispatch]);

  useEffect(() => {
    getConversations({ userId }, dispatch);
  }, [dispatch, userId]);

  return (
    <HomeWrapper>
      <Dashboard />
    </HomeWrapper>
  );
};

export default Home;
