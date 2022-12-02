import { useState } from "react";
import Modal from "./UploadPreview/Modal";
import { useDispatch, useSelector } from "react-redux";
// import { updateURL } from "../../../features/apiCalls";
import { AvatarWrapper } from "./Profile.styled";
import { MdPhotoCamera } from "react-icons/md";
// import axios from "axios";
import { updatedAvatar } from "../../../features/user/services";

const AvatarDisplay = () => {
  const dispatch = useDispatch()
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { userId } = useSelector((state) => state.auth);
  const { avatar } = useSelector((state) => state.user.userInfo);
  const [openModal, setOpenModal] = useState(false);
  const [display, setDisplay] = useState(false);
  const [file, setFile] = useState("");

  const id = userId;

  const upload = (e) => {
    e.preventDefault();
    updatedAvatar({file, id},dispatch);
    window.location.reload();
    /* e.preventDefault();
    const newAvatar = {
      image: avatar,
    };
    const formData = new FormData();
    console.log(formData);
    const fileName = file.name;
    formData.append("avatar", file);
    newAvatar.avatar = fileName;
    try {
      axios.post(`${updateURL}/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (err) {
      console.log(err);
    }
    try {
      axios.put(`${updateURL}/${id}`, newAvatar);
      window.location.reload();
    } catch (err) {} */
  };

  return (
    <AvatarWrapper>
      <div
        className="avatar"
        onMouseEnter={() => setDisplay(true)}
        onMouseLeave={() => setDisplay(false)}
      >
        <img src={avatar ? PF + avatar : PF + "user.png"} alt="avatar" />
        {display === true ? (
          <label>
            <input
              type="file"
              name="avatar"
              onChange={(e) => {
                setFile(e.target.files[0]);
                setOpenModal(true);
              }}
            />
            <MdPhotoCamera className="btn" />
            <span>CHANGE PROFILE PICTURE</span>
            {/* <button onClick={(e) => upload(e)}>submit</button> */}
          </label>
        ) : null}
      </div>
      {file && (
        <Modal
          open={openModal}
          image={URL.createObjectURL(file)}
          onUpload={(e) => upload(e)}
          onClose={() => setOpenModal(false)}
        />
      )}
    </AvatarWrapper>
  );
};

export default AvatarDisplay;
