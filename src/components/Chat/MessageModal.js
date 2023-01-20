import { useCallback } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { getMessages, removeMessage } from "../../features/messages/services";
import { motion } from "framer-motion";
import { toast } from "react-toastify"

export const Overlay = styled.section`
  background-color: #f8f8f89b;
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
    position: absolute;
    background-color: #ffff;
    top: 30%;
    left: 35%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    z-index: 9998;
    padding: 20px 20px;
    .text {
      padding-top: 10px;
      color: #565b5f;
      font-size: 20px;
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
        background-color: #ffff;
        font-weight: 600;
        font-size: 14px;
        outline: none;
        border: 1px solid #ddd;
        border-radius: 3px;
        cursor: pointer;
        :hover {
          box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
          transition: 200ms all;
        }
      }
      button:nth-child(2) {
        height: 45px;
        width: 120px;
        color: #ffff;
        font-weight: 500;
        font-size: 14px;
        background-color: #128c7e;
        outline: none;
        border-radius: 3px;
        border: none;
        cursor: pointer;
        :hover {
          background-color: #19aa99d6;
          transition: 600ms ease;
        }
      }
    }
  }
`;

const MessageModal = ({ open, onClose, currentChat, message, messages}) => {
  const dispatch = useDispatch();

  

  const handleDelete = useCallback( async () => {
    await removeMessage({ currentChat, message }, dispatch);
    onClose()
    toast.warning("Selected message has been deleted", { position: "bottom-left" })
    dispatch(getMessages({ currentChat, messages }));
  }, [dispatch, onClose, currentChat, message, messages]);
  
  if (!open) return null;
  return (
    <Overlay>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="modalWrapper"
      >
        <p className="text">Delete message?</p>
        <div className="btnGroup">
          <button onClick={onClose}>CANCEL</button>
          <button onClick={handleDelete}>DELETE</button>
        </div>
      </motion.div>
    </Overlay>
  );
};

export default MessageModal;
