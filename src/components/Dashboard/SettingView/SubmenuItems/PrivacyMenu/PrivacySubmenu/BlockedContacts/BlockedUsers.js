import { useState, useEffect } from "react";
import Header from "..//..//..//..//Header";
import ContactList from "./ContactList/ContactList";
import ListModal from "./Modals/ListModal";
import { useSelector, useDispatch } from "react-redux";
import { getBlockedContacts } from "../../../../../../../features/contacts/services";
import { Wrapper } from "./BlockedUsers.styled";
import { IoMdPersonAdd } from "react-icons/io";

const BlockedUsers = () => {
  const dispatch = useDispatch();
  const [openListModal, setOpenListModal] = useState(false);

  const { blockedContacts } = useSelector((state) => state.contacts);
  const { userId } = useSelector((state) => state.auth);
  const { theme } = useSelector((state) => state.user.userInfo);

  useEffect(() => {
    dispatch(getBlockedContacts({ userId }));
  }, [dispatch, userId]);

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
