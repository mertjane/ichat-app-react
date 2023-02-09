import { useCallback } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import {
  unBlockUser,
  getBlockedContacts,
} from "../../../../../../../../features/contacts/services";
import { toast } from "react-toastify";

export const Overlay = styled.div`
  background-color: ${(props) =>
    props.theme === "dark" ? "#111b21d1" : "#f8f8f89b"};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 998;
  .modal-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 450px;
    height: 130px;
    position: absolute;
    background-color: ${(props) =>
      props.theme === "dark" ? "#2a373f" : "#ffff"};
    top: 30%;
    left: 35%;
    box-shadow: ${(props) =>
      props.theme === "dark" ? "none" : "rgba(0, 0, 0, 0.24) 0px 3px 8px"};
    padding: 20px 20px;
    span {
      padding-top: 10px;
      color: ${(props) => (props.theme === "dark" ? "#d6d6da" : "#565b5f")};
      font-size: 18px;
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
        color: #00a884;
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
      .confirm-btn {
        height: 45px;
        width: 180px;
        color: ${(props) => (props.theme === "dark" ? "#111b21" : "#ffff")};
        font-weight: 600;
        font-size: 14px;
        background-color: #00a884;
        outline: none;
        border-radius: 3px;
        border: none;
        cursor: pointer;
        :hover {
          background-color: ${(props) =>
            props.theme === "dark" ? "#0cb691" : "#19aa99d6"};
          transition: 600ms all ease;
        }
      }
    }
  }
`;

const WarningModal = ({ open, onClose, friendId, friendName }) => {
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.auth);
  const { theme } = useSelector((state) => state.user.userInfo);

  const handleUnblock = useCallback(async () => {
    await unBlockUser({ userId, friendId }, dispatch);
    await dispatch(getBlockedContacts({ userId }));
    onClose();
    if (theme === "dark") {
      toast.warning(`${friendName} is unblocked`, {
        position: "bottom-left",
        theme: "dark",
      });
    } else {
      toast.warning(`${friendName} is unblocked`, {
        position: "bottom-left",
        theme: "light",
      });
    }
  }, [userId, friendName, dispatch, friendId, onClose, theme]);

  if (!open) return null;
  return (
    <Overlay theme={theme}>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="modal-wrapper"
      >
        <span>Unblock {friendName} ?</span>
        <div className="btnGroup">
          <button onClick={onClose}>CANCEL</button>
          <button onClick={handleUnblock} className="confirm-btn">
            REMOVE BARRIERS
          </button>
        </div>
      </motion.div>
    </Overlay>
  );
};

export default WarningModal;
