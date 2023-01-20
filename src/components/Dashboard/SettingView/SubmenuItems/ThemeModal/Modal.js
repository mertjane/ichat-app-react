import {useState} from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { updateTheme } from "../../../../../features/user/services";

export const Overlay = styled.div`
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
    max-width: 470px;
    width: 100%;
    height: 265px;
    position: absolute;
    background-color: ${(props) =>
    props.theme === "dark" ? "#2a373f" : "#ffff"};
    top: 30%;
    left: 35%;
    box-shadow: ${(props) =>
      props.theme === "dark" ? "none" : "rgba(0, 0, 0, 0.24) 0px 3px 8px"};
    z-index: 999;
    padding: 0 30px;
    h3 {
      color: ${(props) => (props.theme === "dark" ? "#d9dee0" : "#43474b")};
      font-weight: 400;
      padding-top: 24px;
    }
    .selection {
      display: flex;
      flex-direction: column;
      padding: 20px 0;
      label {
        display: flex;
        gap: 6px;
        padding-top: 10px;
        color: ${(props) => (props.theme === "dark" ? "#96969e" : "#565b5f")};
        font-size: 13.6px;
      }
    }
    .btn-group {
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      height: calc(100% - 75%);
      gap: 8px;
      button {
        height: 45px;
        width: 110px;
        color: #128c7e;
        background-color: ${(props) =>
          props.theme === "dark" ? "#2a373f" : "#ffff"};
        font-weight: 500;
        font-size: 15px;
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
        width: 70px;
        color: ${(props) =>
            props.theme === "dark" ? "#111b21" : "#ffff"};;
        font-weight: 600;
        font-size: 15px;
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

const Modal = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.user.userInfo);
  const { userId } = useSelector((state) => state.auth);


  const [selectedTheme, setSelectedTheme] = useState(theme);

  const handleThemeChange = () => {
    updateTheme({ theme: selectedTheme, userId}, dispatch);
    onClose();
  };

  if (!open) return null;
  return (
    <Overlay theme={theme}>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="modalWrapper"
      >
        <h3>choose theme</h3>
        <div className="selection">
          <label htmlFor="open">
            <input
              type="radio"
              name="theme"
              onChange={() => setSelectedTheme("open")}
              checked={selectedTheme === "open"}
            />
            Open
          </label>
          <label htmlFor="dark">
            <input
              type="radio"
              name="theme"
              onChange={() => setSelectedTheme("dark")}
              checked={selectedTheme === "dark"}
            />
            Dark
          </label>
          <label htmlFor="default">
            <input
              type="radio"
              name="theme"
              onChange={() => setSelectedTheme("default")}
              checked={selectedTheme === "default"}
            />
            Default system setting
          </label>
        </div>
        <div className="btn-group">
          <button onClick={onClose}>CANCEL</button>
          <button onClick={handleThemeChange}>OK</button>
        </div>
      </motion.div>
    </Overlay>
  );
};

export default Modal;
