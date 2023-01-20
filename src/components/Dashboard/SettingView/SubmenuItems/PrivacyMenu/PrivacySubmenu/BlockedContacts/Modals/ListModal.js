import { useState, useEffect } from "react";
import User from "./UserList/User";
import { useSelector, useDispatch } from "react-redux";
import { getContacts } from "../../../../../../../../features/contacts/services";
import { Overlay } from "./ListModal.styled";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { AiOutlineSearch } from "react-icons/ai";

const ListModal = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const { contactList } = useSelector((state) => state.contacts);
  const { userId } = useSelector((state) => state.auth);
  const { theme } = useSelector((state) => state.user.userInfo);

  const [query, setQuery] = useState("");

  useEffect(() => {
    dispatch(getContacts({ userId }));
  }, [dispatch, userId]);

  if (!open) return null;

  return (
    <Overlay theme={theme}>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="modalWrapper"
      >
        <div className="header">
          <IoMdClose onClick={onClose} className="icon" />
          <h3>Add blocked contact</h3>
        </div>
        <div className="searchWrapper">
          <AiOutlineSearch className="searchBtn" />
          <input
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Search in contacts"
          />
        </div>
        <div className="userList">
          {contactList
            ?.filter((contact) => contact.name.toLowerCase().includes(query))
            ?.map((contact) => (
              <User key={contact?._id} contact={contact} />
            ))}
        </div>
      </motion.div>
    </Overlay>
  );
};

export default ListModal;
