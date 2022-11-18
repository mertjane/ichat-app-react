import React from "react";
import { Overlay } from "./ListModal.styled";
import { IoMdClose } from "react-icons/io";
import User from "./UserList/User";
import { motion } from "framer-motion";
import { AiOutlineSearch } from "react-icons/ai";

const ListModal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <Overlay>
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
          <input type="text" placeholder="Search in contacts" />
        </div>
        <div className="userList">
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
        </div>
      </motion.div>
    </Overlay>
  );
};

export default ListModal;
