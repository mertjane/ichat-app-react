import { useState, useEffect, useRef } from "react";
import { NavWrapper } from "./Chat.styled";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useSelector } from "react-redux";
import NavbarDropdown from "../Dashboard/Dropdown/NavbarDropdown";

const Navbar = ({
  currentChat,
  setCurrentChat,
  istyping,
  isOnline,
  messages,
  setOpenRightMenu
}) => {
  const dropdownRef = useRef();
  const [openMenu, setOpenMenu] = useState(false);

  const { contactList, blockedContacts } = useSelector(
    (state) => state.contacts
  );
  const { userId } = useSelector((state) => state.auth);
  const { theme } = useSelector((state) => state.user.userInfo);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const friend = currentChat?.members.find((member) => member !== userId);
  const friendData = contactList.find((contact) => contact?._id === friend);

  const isBlocked =
    blockedContacts.filter((contact) => contact?._id === friend).length > 0; // if user blocked


  const StatusDisplay = () => {
    if (isBlocked) {
      return <></>;
    } else if (friendData?.privacy?.onlineStatus === 'none') {
      return <></>;
    } else if (istyping) {
      return <span className="status-text">typing...</span>;
    } else if (isOnline) {
      return <span className="status-text">online</span>;
    } else if (!istyping && isOnline) {
      return <span className="status-text">online</span>;
    } else {
      return <></>;
    }
  };

  // dropdown listener
  useEffect(() => {
    const handler = (e) => {
      if (!dropdownRef.current.contains(e.target)) {
        setOpenMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  

  return (
    <NavWrapper theme={theme}>
      <div className="contactInfo">
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
        <span className="displayName">
          {friendData?.name}
          {<StatusDisplay />}
        </span>
      </div>
      <div className="btnGroup">
        <BsThreeDotsVertical
          onClick={() => setOpenMenu(!openMenu)}
          className={`btn ${openMenu ? "active" : "inactive"}`}
        />
      </div>
      <div
        ref={dropdownRef}
        className={`navbar-dropdown ${openMenu ? "active" : "inactive"}`}
      >
        <NavbarDropdown
          messages={messages}
          currentChat={currentChat}
          setCurrentChat={setCurrentChat}
          setOpenRightMenu={setOpenRightMenu}
        />
      </div>
    </NavWrapper>
  );
};

export default Navbar;
