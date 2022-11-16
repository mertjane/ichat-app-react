import {useState} from "react";
import Header from "..//..//..//..//Header";
import { Wrapper } from "./BlockedUsers.styled";
import { IoMdPersonAdd } from "react-icons/io";
import ContactList from "./ContactList/ContactList";
import ListModal from "./Modals/ListModal";

const BlockedUsers = () => {
    const [openListModal, setOpenListModal] = useState(false)

  return (
    <Wrapper>
      <Header />
      <div onClick={() => setOpenListModal(true)} className="contentWrapper">
        <IoMdPersonAdd className="icon" />
        <span>Add blocked contact</span>
      </div>
      <ListModal open={openListModal} onClose={() => setOpenListModal(false)}/>
      <div className="listWrapper">
        <ContactList />
        <ContactList />
        <ContactList />
        <ContactList />
        <ContactList />
        <ContactList />
        <ContactList />
        <ContactList />
        <ContactList />
        <ContactList />
        <ContactList />
      </div>
      <div className="infoWrapper">
        <span>
          Blocked contacts will no longer be able to call you or send you
          messages
        </span>
      </div>
    </Wrapper>
  );
};

export default BlockedUsers;
