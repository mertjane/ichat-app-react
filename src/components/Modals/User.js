import { useState } from "react";
import { UserWrapper } from "./Modals.styled";
import { MdOutlineAdd, MdOutlineRemoveCircleOutline } from "react-icons/md";
import { addContactURL } from "../../features/apiCalls";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const User = ({ _id, avatar, username, user }) => {
  const id = useSelector((state) => state.auth.userId);
  const currentUsername = useSelector((state) => state.auth.username);
  const contactList = useSelector((state) => state.contacts.contactList);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const [followed, setFollowed] = useState(contactList.includes(_id));
  console.log(followed);

  const handleClick = async () => {
    if (followed) {
      try {
        await axios.put(`${addContactURL}/${id}/remove`, {
          userId: user[0]?._id,
        });
        toast.warning(`${user[0].username} has been removed`, {
          position: "bottom-left",
        });
      } catch (err) {
        console.log(err);
      }
      
    } else {
      try {
        await axios.put(`${addContactURL}/${id}/add`, {
          userId: user[0]?._id,
        });
        toast.success(`${user[0].username} has been added`, {
          position: "bottom-left",
        });
      } catch (err) {
        console.log(err);
      } 
    }
    setFollowed(!followed);
  };

  return (
    <UserWrapper key={_id}>
      <img
        src={avatar ? PF + avatar : PF + "user.png"}
        alt="avatar"
        className="avatar"
      />
      <div className="user-info">
        <label>{username}</label>
        {username !== currentUsername && (
          <button onClick={handleClick} className="addBtn">
            {followed ? <MdOutlineRemoveCircleOutline className="icon" /> : <MdOutlineAdd className="icon" /> }
          </button>
        )}

        {/* <MdOutlineAdd onClick={handleClick} className="addBtn" /> */}
      </div>
    </UserWrapper>
  );
};

export default User;