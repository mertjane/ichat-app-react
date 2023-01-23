import { BsCameraFill, BsPersonFill} from "react-icons/bs";
import { MdInsertPhoto } from "react-icons/md";
import { HiDocumentText } from "react-icons/hi";

const ToggleMenu = () => {

  return (
    <>
      <BsPersonFill className="icons" title="Person"/>
      <HiDocumentText className="icons" title="Document"/>
      <BsCameraFill className="icons" title="Camera"/>
      <MdInsertPhoto className="icons" title="Photos and Videos"/>
    </>
  );
};

export default ToggleMenu;
