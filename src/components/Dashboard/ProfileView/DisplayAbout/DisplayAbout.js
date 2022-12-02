import { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { MdEdit } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import { FiCheck } from "react-icons/fi";
import { updatedAbout } from "../../../../features/user/services";

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
    .editAbout {
      width: 100%;
      height: 75%;
      display: flex;
      align-items: flex-start;
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

const DisplayAbout = () => {
  const dispatch = useDispatch();
  const displayAbout = useSelector((state) => state.user.userInfo.about);
  const { userId } = useSelector((state) => state.auth);

  let id = userId;

  const [about, setAbout] = useState("");
  const [editAbout, setEditAbout] = useState(false);

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
  return (
    <Wrapper>
      <p>About me</p>
      <div>
        {editAbout ? (
          <div className="editAbout">
            <input onChange={(e) => setAbout(e.target.value)} type="text" />
            <label>
              <BsEmojiSmile className="icon" />
              <FiCheck onClick={handleUpdateAbout} className="checkIcon" />
            </label>
          </div>
        ) : (
          <>
            <span>{displayAbout}</span>{" "}
            <MdEdit onClick={() => setEditAbout(true)} className="btn" />
          </>
        )}
      </div>
    </Wrapper>
  );
};

export default DisplayAbout;
