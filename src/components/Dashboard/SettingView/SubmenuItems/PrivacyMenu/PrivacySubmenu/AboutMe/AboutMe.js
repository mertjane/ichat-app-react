import { useState, useCallback, useEffect } from "react";
import Header from "..//..//..//..//Header";
import { useSelector, useDispatch } from "react-redux";
import { Wrapper, Label, StyledRadio } from "./AboutMe.styled";
import { updatePrivacySettings } from "../../../../../../../features/user/services";

const AboutMe = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.user.userInfo);
  const { aboutMe } = useSelector((state) => state.user.userInfo.privacy);
  const { userId } = useSelector((state) => state.auth);
  const [selectedAbout, setSelectedAbout] = useState(aboutMe);

  const handleUpdatePrivacySettings = useCallback(() => {
    updatePrivacySettings(
      {
        userId,
        aboutMe: selectedAbout,
      },
      dispatch
    );
  }, [userId, selectedAbout, dispatch]);

  useEffect(() => {
    if (selectedAbout !== aboutMe) {
      handleUpdatePrivacySettings();
    }
  }, [selectedAbout, aboutMe, handleUpdatePrivacySettings]);

  return (
    <Wrapper theme={theme}>
      <Header />
      <div className="contentWrapper">
        <h5>Who can see my information about me</h5>
        <div className="selection">
          <StyledRadio
            onChange={() => setSelectedAbout("everyone")}
            checked={selectedAbout === "everyone"}
            theme={theme}
            name="about"
            type="radio"
          />
          <Label theme={theme} />
          <span>Everyone</span>
        </div>
        <div className="selection">
          <StyledRadio
            onChange={() => setSelectedAbout("contacts")}
            checked={selectedAbout === "contacts"}
            theme={theme}
            name="about"
            type="radio"
          />
          <Label theme={theme} />
          <span>My contacts</span>
        </div>
        <div className="selection">
          <StyledRadio
            onChange={() => setSelectedAbout("none")}
            checked={selectedAbout === "none"}
            theme={theme}
            name="about"
            type="radio"
          />
          <Label theme={theme} />
          <span>No one</span>
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutMe;
