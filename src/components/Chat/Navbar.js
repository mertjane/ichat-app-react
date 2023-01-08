import { useState, useEffect } from "react";
import { getUserURL } from "../../features/apiCalls";
import { NavWrapper } from "./Chat.styled";
import { BsThreeDotsVertical } from "react-icons/bs";
import { TiUserAdd } from "react-icons/ti";
import { MdVideocam } from "react-icons/md";
import { useSelector } from "react-redux";
import axios from "axios";

const Navbar = ({ currentChat, istyping, isOnline}) => {
  const { userId } = useSelector((state) => state.auth);
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
    <NavWrapper>
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
        <MdVideocam className="btn" />
        <TiUserAdd className="btn" />
        <BsThreeDotsVertical className="btn" />
      </div>
    </NavWrapper>
  );
};

export default Navbar;
