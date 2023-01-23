import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDetails } from "../features/user/services";
import { getConversations } from "../features/conversation/services";
import { HomeWrapper } from "./Pages.styled";
import Dashboard from "../components/Dashboard";
import Skeleton from "../components/Skeleton/Skeleton";

const Home = () => {
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.auth);
  const { theme } = useSelector((state) => state.user.userInfo);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  }, [isLoading]);

  useEffect(() => {
    dispatch(getDetails({ userId }));
  }, [userId, dispatch]);

  useEffect(() => {
    dispatch(getConversations({ userId }));
  }, [userId, dispatch]);

  return (
    <>
      {isLoading ? (
        <Skeleton />
      ) : (
        <HomeWrapper theme={theme}>
          <Dashboard />
        </HomeWrapper>
      )}
    </>
  );
};

export default Home;
