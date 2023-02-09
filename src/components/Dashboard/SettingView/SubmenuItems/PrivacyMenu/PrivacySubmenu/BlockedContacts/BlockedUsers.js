import { useState } from "react";
import Header from "..//..//..//..//Header";
import ContactList from "./ContactList/ContactList";
import ListModal from "./Modals/ListModal";
import { useSelector} from "react-redux";
import { Wrapper } from "./BlockedUsers.styled";
import { IoMdPersonAdd } from "react-icons/io";

const BlockedUsers = () => {
  const [openListModal, setOpenListModal] = useState(false);

  const { blockedContacts } = useSelector((state) => state.contacts);
  const { theme } = useSelector((state) => state.user.userInfo);

  console.log(blockedContacts)

  return (
    <Wrapper theme={theme}>
      <Header />
      <div onClick={() => setOpenListModal(true)} className="contentWrapper">
        <IoMdPersonAdd className="icon" />
        <span>Add blocked contact</span>
      </div>
      <ListModal open={openListModal} onClose={() => setOpenListModal(false)} />
      <div className="listWrapper">
        {blockedContacts?.map((contact) => (
          <ContactList
            key={contact?._id}
            contact={contact}
          />
        ))}
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
