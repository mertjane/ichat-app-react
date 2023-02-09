import { useState } from "react";
import { StyledList } from "./Contacts.styled";
import { IoMdClose } from "react-icons/io";
import WarningModal from "../Modals/WarningModal";
import { useSelector } from "react-redux";

const ContactList = ({ contact, _id }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { theme } = useSelector((state) => state.user.userInfo);
  const { blockedContacts } = useSelector((state) => state.contacts);

  const [openWarning, setOpenWarning] = useState(false);

  let friendId = contact?._id;
  let friendName = contact?.name;

  const isBlocked =
    blockedContacts.filter((contact) => contact?._id === friendId).length > 0;

  return (
    <>
      <StyledList key={_id} theme={theme}>
        <div onClick={() => setOpenWarning(true)} className="list-items">
          {!isBlocked ? (
            <img
              src={contact?.avatar ? PF + contact.avatar : PF + "default.png"}
              alt="avatar"
              className="user-avatar"
            />
          ) : (
            <img
              src={PF + "default.png"}
              alt="avatar"
              className="user-avatar"
            />
          )}

          <div className="user-info">
            <label className="user">
              {contact?.name}
              <span className="status-info">{!isBlocked ? contact?.about : <></>}</span>
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
