import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { toast } from "react-toastify";
import { MdEdit } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import { FiCheck } from "react-icons/fi";
import EmojiList from "../../../EmojiPicker/EmojiList";
import { EmojiWrapper } from "../../../EmojiPicker/Emoji.styled";
import { updatedName } from "../../../../features/user/services";


export const Wrapper = styled.div`
  width: 100%;
  height: 106px;
  background-color: #ffffff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  flex-direction: column;
  p {
    flex: 1;
    display: flex;
    align-items: center;
    color: #485157;
    font-size: 13px;
    padding: 0 30px;
  }
  div {
    flex: 1;
    display: flex;
    align-items: flex-start;
    padding: 0 30px;
    justify-content: space-between;
    .editName {
      width: 100%;
      height: 75%;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      box-sizing: border-box;
      padding: 0;
      border-bottom: 2px solid #292c6d;
      input {
        height: 75%;
        width: 60%;
        font-size: 16px;
        outline: none;
        border: none;
      }
      label {
        color: #c9c8c8;
        font-size: 14px;
        display: flex;
        align-items: center;
        gap: 8px;
        .icon {
          color: #b3b3b3;
          height: 18px;
          width: 18px;
          cursor: pointer;
        }
        .checkIcon {
          color: #7e7d7d;
          height: 24px;
          width: 24px;
          cursor: pointer;
        }
      }
    }
    .btn {
      height: 26px;
      width: 26px;
      color: #81919b;
      cursor: pointer;
    }
  }
`;

const DisplayName = () => {
  const dispatch = useDispatch();
  const showName = useSelector((state) => state.user.userInfo.name);
  const { userId } = useSelector((state) => state.auth);

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
    <Wrapper>
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
          <EmojiWrapper>
              <EmojiList onEmojiClick={onEmojiClick} />
              <span className="bubble"/>
          </EmojiWrapper>
        )}
      </div>
    </Wrapper>
  );
};

export default DisplayName;
