import { useState } from "react";
import { StyledList } from "./Contacts.styled";
import { IoMdClose } from "react-icons/io";
import WarningModal from "../Modals/WarningModal";
import { useSelector } from "react-redux";

const ContactList = ({ contact /* setOpenWarning */ }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { theme } = useSelector((state) => state.user.userInfo);

  const [openWarning, setOpenWarning] = useState(false);

  let friendId = contact?._id;
  let friendName = contact?.name;

  return (
    <>
      <StyledList theme={theme}>
        <div onClick={() => setOpenWarning(true)} className="list-items">
          <img
            src={contact?.avatar ? PF + contact.avatar : PF + "user.png"}
            alt="avatar"
            className="user-avatar"
          />
          <div className="user-info">
            <label className="user">
              {contact?.name}
              <span className="status-info">{contact?.about}</span>
            </label>
            <IoMdClose className="icon" />
          </div>
        </div>
      </StyledList>
      <WarningModal
        friendName={friendName}
        friendId={friendId}
        open={openWarning}
        onClose={() => setOpenWarning(false)}
      />
    </>
  );
};

export default ContactList;
