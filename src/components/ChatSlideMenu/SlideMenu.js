import {useCallback} from "react";
import { useSelector, useDispatch} from "react-redux";
import { SlideMenuWrapper } from "./SlideMenu.styled";
import { IoIosArrowForward } from "react-icons/io";
import { blockUser, unBlockUser, getBlockedContacts} from "../../features/contacts/services";
import { deleteConversation } from "../../features/conversation/services";

const SlideMenu = ({ onClose, currentChat, setCurrentChat}) => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.user.userInfo);
  const { userMessages } = useSelector((state) => state.messages);
  const { userId } = useSelector((state) => state.auth);
  const { contactList, blockedContacts } = useSelector(
    (state) => state.contacts
  );

  const friend = currentChat?.members.find((member) => member !== userId);
  const friendData = contactList.find((contact) => contact._id === friend);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const isBlocked =
    blockedContacts.filter((contact) => contact?._id === friend).length > 0; // if user blocked
  const images = userMessages.filter((message) => message.imageUrl); // filter currentChat messages including image

  const handleBlockUser = useCallback(async() => {
    await blockUser({userId, friendId: friend}, dispatch)
    await dispatch(getBlockedContacts({ userId }));
  }, [dispatch, userId, friend])

  const handleUnBlockUser = useCallback(async() => {
    await unBlockUser({userId, friendId: friend}, dispatch)
    await dispatch(getBlockedContacts({ userId }));
  }, [dispatch, userId, friend])

  const handleDeleteChat = async () => {
    await deleteConversation({conversationdId: currentChat._id}, dispatch)
    setCurrentChat(null)
  }

  return (
    <SlideMenuWrapper theme={theme}>
      <div className="header">
        <div className="closeBtn" onClick={onClose} />
        <p title="contact information">Contact information</p>
      </div>
      <div className="body">
        <div className="avatar-section">
          {friendData?.privacy?.profilePhoto && (
            <img
              src={
                !isBlocked
                  ? friendData?.privacy?.profilePhoto === "none"
                    ? PF + "default.png"
                    : friendData?.avatar
                    ? PF + friendData.avatar
                    : PF + "default.png"
                  : PF + "default.png"
              }
              alt="avatar"
            />
          )}
          <p>{friendData?.name}</p>
        </div>
        <div className="about-section">
          <p>About me</p>
          <span>{friendData?.about}</span>
        </div>
        <div className="media-section">
          <div className="title">
            <p>Media, links and documents</p>
            <div className="indicator">
              {images.length} <IoIosArrowForward className="icon" />
            </div>
          </div>
          <div className="view">
            {images.slice(0, 3).map((img, index) => (
              <div key={index} className="media-item">
                <img src={img?.imageUrl} alt="media item" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="footer">
        {!isBlocked ? (
          <div className="item-box" onClick={handleBlockUser}>
          <div className="block-icon"/>
          <p>{friendData?.name} block your contact</p>
        </div>
        ) : (
          <div className="item-box" onClick={handleUnBlockUser}>
          <div className="block-icon"/>
          <p>{friendData?.name} unblock your contact</p>
        </div>
        )}
        <div className="item-box" onClick={handleDeleteChat}>
          <div className="delete-chat-icon"/>
          <p>delete chat</p>
        </div>
      </div>
    </SlideMenuWrapper>
  );
};

export default SlideMenu;
