import { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "..//..//..//..//Header";
import { Wrapper, Label, StyledRadio } from "./LastSeen.styled";
import { updatePrivacySettings } from "../../../../../../../features/user/services";

const LastSeen = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.user.userInfo);
  const { lastSeen, onlineStatus } = useSelector(
    (state) => state.user.userInfo.privacy
  );
  const { userId } = useSelector((state) => state.auth);
  const [selectedLastSeen, setSelectedLastSeen] = useState(lastSeen);
  const [selectedStatus, setSelectedStatus] = useState(onlineStatus);

  const handleUpdatePrivacySettings = useCallback(() => {
    updatePrivacySettings(
      {
        userId, 
        lastSeen: selectedLastSeen,
        onlineStatus: selectedStatus,
      },
      dispatch
    );
  }, [userId, selectedLastSeen, selectedStatus, dispatch]);

  useEffect(() => {
    if (selectedLastSeen !== lastSeen || selectedStatus !== onlineStatus) {
      handleUpdatePrivacySettings();
    }
  }, [
    selectedLastSeen,
    lastSeen,
    selectedStatus,
    onlineStatus,
    handleUpdatePrivacySettings,
  ]);

  return (
    <Wrapper theme={theme}>
      <Header />
      <div className="contentWrapper">
        <h5>Who can see my last seen info</h5>
        <div className="selection">
          <StyledRadio
            onChange={() => setSelectedLastSeen("everyone")}
            checked={selectedLastSeen === "everyone"}
            theme={theme}
            name="lastSeen"
            type="radio"
          />
          <Label theme={theme} />
          <span>Everyone</span>
        </div>
        <div className="selection">
          <StyledRadio
            onChange={() => setSelectedLastSeen("contacts")}
            checked={selectedLastSeen === "contacts"}
            theme={theme}
            name="lastSeen"
            type="radio"
          />
          <Label theme={theme} />
          <span>My contacts</span>
        </div>
        <div className="selection">
          <StyledRadio
            onChange={() => setSelectedLastSeen("none")}
            checked={selectedLastSeen === "none"}
            theme={theme}
            name="lastSeen"
            type="radio"
          />
          <Label theme={theme} />
          <span>No one</span>
        </div>
        <hr />
        <h5>Who can see my when I am online</h5>
        <div className="selection">
          <StyledRadio
            onChange={() => setSelectedStatus("everyone")}
            checked={selectedStatus === "everyone"}
            theme={theme}
            name="status"
            type="radio"
          />
          <Label theme={theme} />
          <span>Everyone</span>
        </div>
        <div className="selection">
          <StyledRadio
            onChange={() => setSelectedStatus("contacts")}
            checked={selectedStatus === "contacts"}
            theme={theme}
            name="status"
            type="radio"
          />
          <Label theme={theme} />
          <span>My contacts</span>
        </div>
        <div className="selection">
          <StyledRadio
            onChange={() => setSelectedStatus("none")}
            checked={selectedStatus === "none"}
            theme={theme}
            name="status"
            type="radio"
          />
          <Label theme={theme} />
          <span>No one</span>
        </div>
        <p className="note">
          If you do not share your last seen and online information, you will
          not be able to see other user's last seen and online information.
        </p>
      </div>
    </Wrapper>
  );
};

export default LastSeen;
