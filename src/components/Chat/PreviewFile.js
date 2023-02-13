import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendMessage } from "../../features/messages/services";
import { Layer } from "./Preview.styled";
import { IoMdClose } from "react-icons/io";
import { BsEmojiSmile } from "react-icons/bs";
import { RiText, RiBlurOffFill } from "react-icons/ri";
import { GoPencil } from "react-icons/go";
import { MdCropRotate, MdUndo, MdRedo, MdOutlineAdd } from "react-icons/md";

const PreviewFile = ({
  open,
  onClose,
  image,
  newMessage,
  currentChat,
  imageUrl,
  setImageUrl,
  socket
}) => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.user.userInfo);
  const { userId } = useSelector((state) => state.auth);

  const [selectedImage, setSelectedImage] = useState(image && image[0]);


  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  const handleConfirm = async () => {
    sendMessage({ currentChat, userId, newMessage, imageUrl }, dispatch);
    const receiverId = currentChat?.members?.find((m) => m !== userId);
    socket.emit("sendMessage", {
      conversationId: currentChat._id,
      senderId: userId,
      receiverId,
      text: newMessage,
      image: imageUrl,
    });
    setImageUrl([]);
    onClose();
  };

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
        <img src={selectedImage} alt="file" />
      </div>
      <div className="footer">
        <div className="input-field">
          <input placeholder="write a message" type="text" />
          <BsEmojiSmile className="searchBtn" />
        </div>
        <div className="group">
          {image?.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="img-list"
              className={`images ${img === selectedImage ? "active" : "inactive"}`}
              onClick={() => handleImageClick(img)}
            />
          ))}
          <div className="add">
            <input type="file" name="image" />
            <MdOutlineAdd className="addBtn" />
          </div>
          <div onClick={handleConfirm} className="confirmBtn" />
        </div>
      </div>
    </Layer>
  );
};

export default PreviewFile;
