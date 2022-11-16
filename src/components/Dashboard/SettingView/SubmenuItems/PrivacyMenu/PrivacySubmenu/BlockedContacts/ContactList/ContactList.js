import {useState} from "react";
import { StyledList } from "./Contacts.styled";
import { IoMdClose } from "react-icons/io";
import WarningModal from "../Modals/WarningModal";

const ContactList = () => {
  const [openWarning, setOpenWarning] = useState(false);

  return (
    <StyledList>
      <div onClick={() => setOpenWarning(true)} className="list-items">
        <div className="user-avatar" />
        <div className="user-info">
          <label className="user">
            Username
            <span className="status-info">user status</span>
          </label>
          <IoMdClose className="icon" />
        </div>
      </div>
      <WarningModal open={openWarning} onClose={() => setOpenWarning(false)}/>
    </StyledList>
  );
};

export default ContactList;
