import { useState, useEffect } from "react";
import { Overlay } from "./Modals.styled";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import { searchContactsURL } from "../../features/apiCalls";
import axios from "axios";
import Search from "./Search";
import List from "./List";
import { useSelector } from "react-redux";

const AddUser = ({ open, onClose }) => {
  const [user, setUser] = useState([]);
  const [query, setQuery] = useState("");
  const { theme } = useSelector((state) => state.user.userInfo);

  useEffect(() => {
    const findUser = async () => {
      const res = await axios.get(`${searchContactsURL}/${query}`);
      setUser(res.data);
    };
    if (query.length !== 0) findUser();
  }, [query]);

  if (!open) return null;

  return (
    <Overlay theme={theme}>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="modal-wrapper"
      >
        <div className="header">
          <MdClose onClick={onClose} className="btn" />
          <h3>Add a user</h3>
        </div>
        <Search onChange={(e) => setQuery(e.target.value)} />
        <List user={user} />
      </motion.div>
    </Overlay>
  );
};

export default AddUser;
