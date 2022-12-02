import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { MdOutlineClose } from "react-icons/md";
import { FiCheck } from "react-icons/fi";

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
    max-width: 540px;
    width: 100%;
    height: 540px;
    position: absolute;
    background-color: #ffff;
    top: 17%;
    left: 35%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    z-index: 999;
    .header {
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
      background-color: #292c6d;
      padding: 0 30px;
      box-sizing: border-box;
      gap: 24px;
      .btn {
        color: #dddd;
        width: 26px;
        height: 26px;
        cursor: pointer;
      }
      h3 {
        color: #ffff;
        font-weight: 600;
        font-size: 20px;
      }
    }
    .uploadedIMG {
      width: 100%;
      height: 395px;
      background-color: #252525cf;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 100%;
        height: 100%;
        overflow: hidden;
        object-fit: contain;
      }
    }
    .footer {
      background-color: #e9edef;
      height: calc(100% - 445px);
      position: relative;
      .submit-btn {
        color: #ffff;
        padding: 10px;
        border-radius: 50%;
        background-color: #3e428d;
        width: 40px;
        height: 40px;
        position: absolute;
        bottom: 60px;
        left: 430px;
        cursor: pointer;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
          rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
      }
    }
  }
`;

const Modal = ({ open, onClose, image, onUpload }) => {
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
          <MdOutlineClose onClick={onClose} className="btn" />
          <h3>Drag to picture to adjust</h3>
        </div>
        <div className="uploadedIMG">
          <img className="uploaded" src={image} alt="avatar" />
        </div>
        <div className="footer">
          <FiCheck onClick={onUpload} className="submit-btn" />
        </div>
      </motion.div>
    </Overlay>
  );
};

export default Modal;
