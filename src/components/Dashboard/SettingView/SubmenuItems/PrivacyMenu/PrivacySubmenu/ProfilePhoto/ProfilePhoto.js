import {useState, useCallback, useEffect} from "react";
import Header from "..//..//..//..//Header";
import { Wrapper, Label, StyledRadio } from "./ProfilePhoto.styled";
import { useSelector, useDispatch} from "react-redux";
import { updatePrivacySettings } from "../../../../../../../features/user/services";

const ProfilePhoto = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.user.userInfo);
  const { profilePhoto } = useSelector((state) => state.user.userInfo.privacy);
  const { userId } = useSelector((state) => state.auth);
  const [selectedPhotoOptn, setSelectedPhotoOptn] = useState(profilePhoto);

  const handleUpdatePrivacySettings = useCallback(() => {
    updatePrivacySettings(
      {
        userId,
        profilePhoto: selectedPhotoOptn,
      },
      dispatch
    );
  }, [userId, selectedPhotoOptn, dispatch]);

  useEffect(() => {
    if (selectedPhotoOptn !== profilePhoto) {
      handleUpdatePrivacySettings();
    }
  }, [selectedPhotoOptn, profilePhoto, handleUpdatePrivacySettings]);

  return (
    <Wrapper theme={theme}>
      <Header />
      <div className="contentWrapper">
        <h5>Who can see my profile photo</h5>
        <div className="selection">
          <StyledRadio
            onChange={() => setSelectedPhotoOptn("everyone")}
            checked={selectedPhotoOptn === "everyone"}
            theme={theme}
            name="photo"
            type="radio"
          />
          <Label theme={theme} />
          <span>Everyone</span>
        </div>
        <div className="selection">
          <StyledRadio
            onChange={() => setSelectedPhotoOptn("contacts")}
            checked={selectedPhotoOptn === "contacts"}
            theme={theme}
            name="photo"
            type="radio"
          />
          <Label theme={theme} />
          <span>My contacts</span>
        </div>
        <div className="selection">
          <StyledRadio
            onChange={() => setSelectedPhotoOptn("none")}
            checked={selectedPhotoOptn === "none"}
            theme={theme}
            name="photo"
            type="radio"
          />
          <Label theme={theme} />
          <span>No one</span>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProfilePhoto;
