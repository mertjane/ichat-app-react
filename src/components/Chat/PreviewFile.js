import React from "react";
import { useSelector, useDispatch} from "react-redux";
import { sendMessage } from "../../features/messages/services";
import { Layer } from "./Preview.styled";
import { IoMdClose } from "react-icons/io";
import { BsEmojiSmile } from "react-icons/bs";
import { RiText, RiBlurOffFill } from "react-icons/ri";
import { GoPencil } from "react-icons/go";
import {
  MdCropRotate,
  MdUndo,
  MdRedo,
  MdOutlineAdd
} from "react-icons/md";

const PreviewFile = ({ open, onClose, image, newMessage, currentChat, imageUrl, setImageUrl}) => {
  const dispatch = useDispatch()
  const { theme } = useSelector((state) => state.user.userInfo);
  const { userId } = useSelector((state) => state.auth);

  const handleConfirm = async () => {
    await sendMessage({ currentChat, userId, newMessage, imageUrl }, dispatch);
    setImageUrl("")
    onClose()
  }


  if (!open) return null;
  return (
    <Layer theme={theme}>
      <div className="header">
        <IoMdClose onClick={onClose} className="closeBtn" />
        <div className="btn-group">
          <BsEmojiSmile className="btn" />
          <RiText className="btn" />
          <GoPencil className="btn" />
          <RiBlurOffFill className="btn" />
          <MdCropRotate className="btn" />
          <MdUndo className="btn" />
          <MdRedo className="btn" />
        </div>
      </div>
      <div className="item-preview">
        <img src={image} alt="file" />
      </div>
      <div className="input-field">
        <input placeholder="write a message" type="text" />
        <BsEmojiSmile className="searchBtn" />
      </div>
      <div className="footer">
        <div className="group">
          <img src={image} alt="img-list" />
          <div className="add">
            <MdOutlineAdd className="addBtn" />
          </div>
        </div>
        <div onClick={handleConfirm} className="confirmBtn" />
      </div>
    </Layer>
  );
};

export default PreviewFile;
