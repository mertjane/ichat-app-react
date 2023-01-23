import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NameWrapper } from "../Profile.styled";
import { toast } from "react-toastify";
import { MdEdit } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import { FiCheck } from "react-icons/fi";
import EmojiList from "../../../EmojiPicker/EmojiList";
import { EmojiWrapper } from "../../../EmojiPicker/Emoji.styled";
import { updatedName } from "../../../../features/user/services";

const DisplayName = () => {
  const dispatch = useDispatch();
  const showName = useSelector((state) => state.user.userInfo.name);
  const { userId } = useSelector((state) => state.auth);
  const { theme } = useSelector((state) => state.user.userInfo);

  const id = userId;
  const [name, setName] = useState("");
  const [editName, setEditName] = useState(false);

  // input controller
  const MAX_CHARS = 25;
  const remaining = MAX_CHARS - name.length;
  const color = remaining <= 0 ? "red" : null;

  // emoji list
  const [showList, setShowList] = useState(false);

  const handleUpdateName = () => {
    if (name === "") {
      toast.error(`Display name cannot be empty`, {
        position: "bottom-left",
      });
    } else if (name.length > 25) {
      toast.warning(`Display name cannot be more than 25 characters`, {
        position: "bottom-left",
      });
    } else {
      updatedName({ name, id }, dispatch);
      setEditName(false);
      toast.success(`Display name changed for ${name}`, {
        position: "bottom-left",
      });
    }
  };

  const onEmojiClick = (event, emojiObject) => {
    setName((prevInput) => prevInput + emojiObject.emoji);
    setShowList(false);
  };

  return (
    <NameWrapper theme={theme}>
      <p>Your name</p>
      <div>
        {editName ? (
          <div className="editName">
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
            />
            <label style={{ color: color }}>
              {remaining}
              <BsEmojiSmile
                onClick={() => setShowList(!showList)}
                className="icon"
              />
              <FiCheck onClick={handleUpdateName} className="checkIcon" />
            </label>
          </div>
        ) : (
          <>
            <span>{showName}</span>{" "}
            <MdEdit onClick={() => setEditName(true)} className="btn" />
          </>
        )}
        {showList && (
          <EmojiWrapper theme={theme}>
              <EmojiList onEmojiClick={onEmojiClick} />
              <span className="bubble"/>
          </EmojiWrapper>
        )}
      </div>
    </NameWrapper>
  );
};

export default DisplayName;
