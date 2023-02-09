import { useState, useEffect } from "react";
import Header from "..//..//Header";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Wrapper, Label, CheckBox } from "./Privacy.styled";
import { getBlockedContacts } from "../../../../../features/contacts/services";
import { updatePrivacySettings } from "../../../../../features/user/services";
import { MdKeyboardArrowRight } from "react-icons/md";

const PrivacyMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { blockedContacts } = useSelector((state) => state.contacts);
  const { userId } = useSelector((state) => state.auth);
  const { theme } = useSelector((state) => state.user.userInfo);
  const { readReceipt } = useSelector((state) => state.user.userInfo.privacy);
  const [selectedRead, setSelectedRead] = useState(readReceipt);

  useEffect(() => {
    dispatch(getBlockedContacts({ userId }));
  }, [dispatch, userId]);

  const handleReadReceiptChange = async () => {
    setSelectedRead(!selectedRead);
    try {
      await updatePrivacySettings(
        { userId, readReceipt: !selectedRead },
        dispatch
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper theme={theme}>
      <Header />
      <div className="list">
        <div className="contentWrapper">
          <h5>Who can see my personal information</h5>
          <div
            onClick={() => navigate("last-seen-online")}
            className="selection"
          >
            <div className="box">
              Last seen and online
              <span>Nobody, Everyone</span>
            </div>
            <MdKeyboardArrowRight className="icon" />
          </div>
          <hr />
          <div onClick={() => navigate("profile-photo")} className="selection">
            <div className="box">
              Profile photo
              <span>my contacts</span>
            </div>
            <MdKeyboardArrowRight className="icon" />
          </div>
          <hr />
          <div onClick={() => navigate("about-me")} className="selection">
            <div className="box">
              About me
              <span>my contacts</span>
            </div>
            <MdKeyboardArrowRight className="icon" />
          </div>
          <hr />
          <div className="selection">
            <div className="box">
              Read receipt
              <span>
                If you disable this feature, you will not be able to send or
                receive Read Receipts. Read receipts are always sent for group
                chats.
              </span>
            </div>
            <CheckBox
              checked={readReceipt}
              onChange={handleReadReceiptChange}
              theme={theme}
              type="checkbox"
            />
            <Label theme={theme} />
          </div>
        </div>
        <div
          onClick={() => navigate("message-duration")}
          className="contentWrapper"
        >
          <h5>Timed messages</h5>
          <div className="selection">
            <div className="box">
              Default message duration
              <span>Closed</span>
            </div>
            <MdKeyboardArrowRight className="icon" />
          </div>
        </div>
        <div
          onClick={() => navigate("blocked-contacts")}
          className="contentWrapper"
        >
          <div className="selection">
            <div className="box">
              blocked contacts
              <span>{blockedContacts.length}</span>
            </div>
            <MdKeyboardArrowRight className="icon" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default PrivacyMenu;
