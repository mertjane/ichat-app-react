import { useCallback } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getMessages, removeMessage } from "../../features/messages/services";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

export const Overlay = styled.section`
  background-color: ${(props) =>
    props.theme === "dark" ? "#111b21d1" : "#f8f8f89b"};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 998;
  .modalWrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    max-width: 450px;
    height: 130px;
    position: relative;
    background-color: ${(props) =>
      props.theme === "dark" ? "#2a373f" : "#ffff"};
    top: 30%;
    left: 35%;
    box-shadow: ${(props) =>
      props.theme === "dark" ? "none" : "rgba(0, 0, 0, 0.24) 0px 3px 8px"};
    padding: 20px 20px;
    .modal-text {
      color: ${(props) => (props.theme === "dark" ? "#d6d6da" : "#565b5f")} !important;
      padding-top: 10px;
      font-size: 16px;
      font-weight: 500;
    }
    .btnGroup {
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      gap: 8px;
      button {
        height: 45px;
        width: 110px;
        color: #128c7e;
        background-color: ${(props) =>
          props.theme === "dark" ? "#2a373f" : "#ffff"};
        font-weight: 600;
        font-size: 14px;
        outline: none;
        border: ${(props) =>
          props.theme === "dark" ? "1px solid #464747a0" : "1px solid #ddd"};
        border-radius: 3px;
        cursor: pointer;
        :hover {
          box-shadow: ${(props) =>
            props.theme === "dark"
              ? "none"
              : "rgba(0, 0, 0, 0.16) 0px 1px 4px"};
          background-color: ${(props) =>
            props.theme === "dark" ? "#3d4e58ab" : "none"};
          transition: ${(props) =>
            props.theme === "dark" ? "350ms all ease" : "200ms all ease"};
        }
      }
      button:nth-child(2) {
        height: 45px;
        width: 120px;
        color: ${(props) =>
            props.theme === "dark" ? "#111b21" : "#ffff"};;
        font-weight: 500;
        font-size: 14px;
        background-color: #128c7e;
        outline: none;
        border-radius: 3px;
        border: none;
        cursor: pointer;
        :hover {
          background-color: ${(props) =>
            props.theme === "dark" ? "#1b9e8f" : "#19aa99d6"};
          transition: 600ms all ease;
        }
      }
    }
  }
`;

const MessageModal = ({ open, onClose, currentChat, message, messages }) => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.user.userInfo);

  const handleDelete = useCallback(async () => {
    await removeMessage({ currentChat, message }, dispatch);
    onClose();
    toast.warning("Selected message has been deleted", {
      position: "bottom-left",
    });
    dispatch(getMessages({ currentChat, messages }));
  }, [dispatch, onClose, currentChat, message, messages]);

  

  if (!open) return null;
  return (
    <Overlay theme={theme}>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="modalWrapper"
      >
        <p className="modal-text">Delete message?</p>
        <div className="btnGroup">
          <button onClick={onClose}>CANCEL</button>
          <button onClick={handleDelete}>DELETE</button>
        </div>
      </motion.div>
    </Overlay>
  );
};

export default MessageModal;
