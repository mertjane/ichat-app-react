import { useState } from "react";
import { useSelector } from "react-redux";
import { Overlay } from "./MediaView.styled";
import moment from "moment";

const MediaView = ({ open, onClose, message, currentChat }) => {
  const { theme, avatar } = useSelector((state) => state.user.userInfo);
  const { userMessages } = useSelector((state) => state.messages);
  const { userId } = useSelector((state) => state.auth);
  const conversations = useSelector((state) => state.conversations.info);
  const { contactList } = useSelector((state) => state.contacts);

  const [selectedImage, setSelectedImage] = useState(message.imageUrl);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [forwardDisabled, setForwardDisabled] = useState(false);


  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const images = userMessages.filter((message) => message.imageUrl); // filter currentChat messages including image

  // navbar view logic
  const currentChatMembers = conversations?.find(
    (conversation) => conversation._id === currentChat._id
  ).members;
  const otherPerson = contactList?.find(
    (contact) =>
      currentChatMembers?.includes(contact._id) && contact._id !== userId
  );

  const selectedMessage =
    selectedImage &&
    userMessages.find((message) => message.imageUrl === selectedImage);

  const displayName =
    selectedMessage?.sender === userId ? "You" : otherPerson?.name || "unknown";
  const displayAvatar =
    selectedMessage?.sender === userId
      ? PF + avatar
      : PF + (otherPerson?.avatar || "default.png");
  const selectedDate =
    selectedMessage?.createdAt || (images[0] && images[0].createdAt);

  // navigate
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedImage(images[currentIndex - 1].imageUrl);
      setForwardDisabled(false);
      if (currentIndex - 1 === 0) {
        setPrevDisabled(true);
      }
    }
  };

  const handleForward = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedImage(images[currentIndex + 1].imageUrl);
      setPrevDisabled(false);
      if (currentIndex + 1 === images.length - 1) {
        setForwardDisabled(true);
      }
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image.imageUrl);
    const currentIndex = images.findIndex(
      (img) => img.imageUrl === image.imageUrl
    );
    setCurrentIndex(currentIndex);
    if (currentIndex === 0) {
      setPrevDisabled(true);
    } else {
      setPrevDisabled(false);
    }
    if (currentIndex === images.length - 1) {
      setForwardDisabled(true);
    } else {
      setForwardDisabled(false);
    }
    // handlePrev();
    // handleForward();
  };
  

  if (!open) return null;
  return (
    <Overlay theme={theme}>
      <div className="header">
        <div className="message-info">
          <img
            className="avatar"
            src={displayAvatar}
            alt="avatar"
          />
          <p>
            {displayName}
            <span>
              {moment(selectedDate).format("L") +
                "  " +
                moment(selectedDate).format("LT")}
            </span>
          </p>
        </div>
        <div className="btn-group">
          <div className="btn" />
          <div className="btn" />
          <div className="btn" />
          <div className="btn" />
          <div className="btn" />
          <div onClick={onClose} className="btn" />
        </div>
      </div>
      <div className="body">
        <div className="prev-wrapper">
          <div
            onClick={handleForward}
            className={`btn ${forwardDisabled ? "inactive" : "active"}`}
          />
        </div>
        <div className="view-wrapper">
          {selectedImage ? (
            <img src={selectedImage} alt="imgMsg" className="chat-media" />
          ) : (
            <img
              src={message.imageUrl[0]}
              alt="imgMsg"
              className="chat-media"
            />
          )}
        </div>
        <div className="forward-wrapper">
          <div
            onClick={handlePrev}
            className={`btn ${prevDisabled ? "inactive" : "active"}`}
          />
        </div>
      </div>
      <div className="footer">
        {images.map((image, index) => (
          <div
            key={index}
            className={`archive-item ${
              selectedImage === image.imageUrl ? "active" : "inactive"
            }`}
          >
            <img
              src={image.imageUrl}
              alt="User uploaded media"
              className="archive-media"
              onClick={() => handleImageClick(image)}
            />
          </div>
        ))}
      </div>
    </Overlay>
  );
};

export default MediaView;
