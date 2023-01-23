import { useState, useEffect } from "react";
import { getUserURL } from "../../features/apiCalls";
import { NavWrapper } from "./Chat.styled";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useSelector } from "react-redux";
import axios from "axios";

const Navbar = ({ currentChat, istyping, isOnline}) => {
  const { userId } = useSelector((state) => state.auth);
  const { theme } = useSelector((state) => state.user.userInfo)
  const [user, setUser] = useState([]);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const friendId = currentChat?.members?.find((m) => m !== userId);
    const getUser = async () => {
      try {
        const res = await axios(`${getUserURL}/${friendId}`);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentChat.members, userId]);

  const StatusDisplay = () => {
    if (istyping) {
      return <span className="status-text">typing...</span>;
    } else if(isOnline) {
      return <span className="status-text">online</span>;
    } else if(!istyping && isOnline){
      return <span className="status-text">online</span>
    } else {
      return <></>
    }
  };

  return (
    <NavWrapper theme={theme}>
      <div className="contactInfo">
        <img
          src={user?.avatar ? PF + user.avatar : PF + "user.png"}
          alt="avatar"
        />
        <span className="displayName">
        {user?.name}
        {<StatusDisplay />}
        </span>
      </div>
      <div className="btnGroup">
        <BsThreeDotsVertical className="btn" />
      </div>
    </NavWrapper>
  );
};

export default Navbar;
