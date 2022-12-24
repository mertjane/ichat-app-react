import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

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
    z-index: 999;
    padding: 20px 20px;
    span {
      padding-top: 10px;
      color: #565b5f;
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
        color: #128C7E;
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
        width: 180px;
        color: #ffff;
        font-weight: 500;
        font-size: 14px;
        background-color: #128C7E;
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

const WarningModal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <Overlay>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="modalWrapper"
      >
        <span>Unblock "username"</span>
        <div className="btnGroup">
          <button onClick={onClose}>CANCEL</button>
          <button>REMOVE BARRIERS</button>
        </div>
      </motion.div>
    </Overlay>
  );
};

export default WarningModal;
