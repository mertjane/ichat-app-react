import { BsCameraFill, BsPersonFill } from "react-icons/bs";
import { MdInsertPhoto } from "react-icons/md";
import { HiDocumentText } from "react-icons/hi";

const ToggleMenu = ({ setImageUrl, setOpenPreview}) => {
  return (
    <>
      <BsPersonFill className="icons" title="Person" />
      <HiDocumentText className="icons" title="Document" />
      <BsCameraFill className="icons" title="Camera" />
      <form className="item" encType="multipart/form-data" >
        <MdInsertPhoto className="icons" title="Photos and Videos" />
        <input
          type="file"
          name="image"
          onChange={(e) => {
            setImageUrl(e.target.files[0]);
            setOpenPreview(true);
          }}
        />
      </form>
    </>
  );
};

export default ToggleMenu;
