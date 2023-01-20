import { useEffect } from "react";
import Header from "..//..//Header";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Wrapper, Label, CheckBox } from "./Privacy.styled";
import { getBlockedContacts } from "../../../../../features/contacts/services";
import { MdKeyboardArrowRight } from "react-icons/md";

const PrivacyMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { blockedContacts } = useSelector((state) => state.contacts);
  const { userId } = useSelector((state) => state.auth);
  const { theme } = useSelector((state) => state.user.userInfo);

  useEffect(() => {
    dispatch(getBlockedContacts({ userId }));
  }, [dispatch, userId]);

  return (
    <Wrapper theme={theme}>
      <Header />
      <div className="contentWrapper">
        <h5>Who can see my personal information</h5>
        <div onClick={() => navigate("last-seen-online")} className="selection">
          <label>
            Last seen and online
            <span>Nobody, Everyone</span>
          </label>
          <MdKeyboardArrowRight className="icon" />
        </div>
        <hr />
        <div onClick={() => navigate("profile-photo")} className="selection">
          <label>
            Profile photo
            <span>my contacts</span>
          </label>
          <MdKeyboardArrowRight className="icon" />
        </div>
        <hr />
        <div onClick={() => navigate("about-me")} className="selection">
          <label>
            About me
            <span>my contacts</span>
          </label>
          <MdKeyboardArrowRight className="icon" />
        </div>
        <hr />
        <div className="selection">
          <label>
            Read receipt
            <span>
              If you disable this feature, you will not be able to send or
              receive Read Receipts. Read receipts are always sent for group
              chats.
            </span>
          </label>
          <CheckBox theme={theme} type="checkbox" />
          <Label theme={theme}/>
        </div>
      </div>
      <div
        onClick={() => navigate("message-duration")}
        className="contentWrapper"
      >
        <h5>Timed messages</h5>
        <div className="selection">
          <label theme={theme}>
            Default message duration
            <span>Closed</span>
          </label >
          <MdKeyboardArrowRight className="icon" />
        </div>
      </div>
      <div
        onClick={() => navigate("blocked-contacts")}
        className="contentWrapper"
      >
        <div className="selection">
          <label theme={theme}>
            blocked contacts
            <span>{blockedContacts.length}</span>
          </label>
          <MdKeyboardArrowRight className="icon" />
        </div>
      </div>
    </Wrapper>
  );
};

export default PrivacyMenu;
