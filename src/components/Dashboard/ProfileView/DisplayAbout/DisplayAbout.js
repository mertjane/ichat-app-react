import { useState } from "react";
import { AboutWrapper } from "../Profile.styled" 
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { MdEdit } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import { FiCheck } from "react-icons/fi";
import EmojiList from "../../../EmojiPicker/EmojiList";
import { EmojiWrapper2 } from "../../../EmojiPicker/Emoji.styled";
import { updatedAbout } from "../../../../features/user/services";


const DisplayAbout = () => {
  const dispatch = useDispatch();
  const displayAbout = useSelector((state) => state.user.userInfo.about);
  const { userId } = useSelector((state) => state.auth);
  const {theme} = useSelector((state) => state.user.userInfo)

  let id = userId;

  const [about, setAbout] = useState("");
  const [editAbout, setEditAbout] = useState(false);

  // emoji list
  const [showList, setShowList] = useState(false);

  const handleUpdateAbout = () => {
    if (about.length > 30) {
      toast.warning(`This field cannot be more than 30 characters`, {
        position: "bottom-left",
      });
    } else {
      updatedAbout({ about, id }, dispatch);
      setEditAbout(false);
      toast.success(`Successfully updated`, {
        position: "bottom-left",
      });
    }
  };

  const onEmojiClick = (event, emojiObject) => {
    setAbout((prevInput) => prevInput + emojiObject.emoji);
    setShowList(false);
  };

  return (
    <AboutWrapper theme={theme}>
      <p>About me</p>
      <div>
        {editAbout ? (
          <div className="editAbout">
            <input value={about} onChange={(e) => setAbout(e.target.value)} type="text" />
            <label>
              <BsEmojiSmile onClick={() => setShowList(!showList)} className="icon" />
              <FiCheck onClick={handleUpdateAbout} className="checkIcon" />
            </label>
          </div>
        ) : (
          <>
            <span>{displayAbout}</span>{" "}
            <MdEdit onClick={() => setEditAbout(true)} className="btn" />
          </>
        )}
        {showList && (
          <EmojiWrapper2>
              <EmojiList onEmojiClick={onEmojiClick} />
              <span className="bubble"/>
          </EmojiWrapper2>
        )}
      </div>
    </AboutWrapper>
  );
};

export default DisplayAbout;
