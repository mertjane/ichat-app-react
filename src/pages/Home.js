import {useState, useEffect} from "react";
import Dashboard from "../components/Dashboard";
import Chat from "../components/Chat";
import { HomeWrapper } from "./Pages.styled";
import { useSelector, useDispatch } from "react-redux";
import { getDetails } from "../features/user/services";


const Home = () => {
  const dispatch = useDispatch()
  const {userId} = useSelector((state) => state.auth)
  let ID = userId
  const [userInfo] = useState({
    avatar: "",
    name: "",
    about: "",
    id: userId,
  })

  useEffect(() => {
      getDetails({userInfo, ID}, dispatch)
  }, [userInfo, ID, dispatch])
  
  return (
    <HomeWrapper>
      <Dashboard />
      <Chat />
    </HomeWrapper>
  );
};

export default Home;
