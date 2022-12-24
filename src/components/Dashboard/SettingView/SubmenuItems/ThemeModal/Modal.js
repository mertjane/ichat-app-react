import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export const Overlay = styled.div`
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
    max-width: 470px;
    width: 100%;
    height: 265px;
    position: absolute;
    background-color: #ffff;
    top: 30%;
    left: 35%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    z-index: 999;
    padding: 0 30px;
    h3 {
      color: #43474b;
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
        color: #565b5f;
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
        color: #128C7E;
        background-color: #ffff;
        font-weight: 500;
        font-size: 15px;
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
        width: 70px;
        color: #ffff;
        font-weight: 500;
        font-size: 15px;
        background-color: #128C7E;
        outline: none;
        border-radius: 3px;
        border: none;
        cursor: pointer;
        :hover {
          background-color: #1aa393;
          transition: 600ms ease;
        }
      }
    }
  }
`;

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
      <Overlay>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="modalWrapper"
        >
          <h3>choose theme</h3>
          <div className="selection">
            <label htmlFor="open">
              <input type="radio" name="theme" />
              Open
            </label>
            <label htmlFor="dark">
              <input type="radio" name="theme" />
              Dark
            </label>
            <label htmlFor="default">
              <input type="radio" name="theme" />
              Default system setting
            </label>
          </div>
          <div className="btn-group">
            <button onClick={onClose}>CANCEL</button>
            <button>OK</button>
          </div>
        </motion.div>
      </Overlay>
  );
};

export default Modal;
