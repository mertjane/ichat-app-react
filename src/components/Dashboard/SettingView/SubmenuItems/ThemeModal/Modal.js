import { useState } from "react";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { updateTheme } from "../../../../../features/user/services";
import { Overlay, Label, StyledRadio} from "./Modal.styled";


const Modal = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.user.userInfo);
  const { userId } = useSelector((state) => state.auth);

  const [selectedTheme, setSelectedTheme] = useState(theme); 

  const handleThemeChange = () => {
    updateTheme({ theme: selectedTheme, userId }, dispatch);
    onClose();
  };

  if (!open) return null;
  return (
    <Overlay theme={theme}>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="modalWrapper"
      >
        <h3>Choose theme</h3>
        <div className="selection">
          <StyledRadio
            theme={theme}
            type="radio"
            name="theme"
            onChange={() => setSelectedTheme("open")}
            checked={selectedTheme === "open"}
          />
          <Label theme={theme} htmlFor="open" />
          Open
        </div>
        <div className="selection">
          <StyledRadio
            theme={theme}
            type="radio"
            name="theme"
            onChange={() => setSelectedTheme("dark")}
            checked={selectedTheme === "dark"}
          />
          <Label theme={theme} htmlFor="dark" />
          Dark
        </div>
        <div className="selection">
          <StyledRadio
            theme={theme}
            type="radio"
            name="theme"
            onChange={() => setSelectedTheme("default")}
            checked={selectedTheme === "default"}
          />
          <Label theme={theme} htmlFor="default" />
          Default system setting
        </div>
        <div className="btn-group">
          <button onClick={onClose}>CANCEL</button>
          <button onClick={handleThemeChange}>OK</button>
        </div>
      </motion.div>
    </Overlay>
  );
};

export default Modal;
