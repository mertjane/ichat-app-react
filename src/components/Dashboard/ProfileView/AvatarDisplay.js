import { useState } from "react";
import { AvatarWrapper } from "./Profile.styled";
import ProfileIMG from "..//..//..//assets/man.png";
import { MdPhotoCamera } from "react-icons/md";


const AvatarDisplay = () => {
  const [display, setDisplay] = useState(false);

  return (
    <AvatarWrapper>
      <div
        className="avatar"
        onMouseEnter={() => setDisplay(true)}
        onMouseLeave={() => setDisplay(false)}
      >
        <img src={ProfileIMG} alt="avatar" />
        {display === true ? (
          <div>
            <MdPhotoCamera className="btn" />
            <span>CHANGE PROFILE PICTURE</span>
          </div>
        ) : null}
      </div>
    </AvatarWrapper>
  );
};

export default AvatarDisplay;
