import { useState } from "react";
import BlockUser from "../../Modals/BlockUser";
import ClearMessages from "../../Modals/ClearMessages";

const NavbarDropdown = ({ setCurrentChat, currentChat, messages, setOpenRightMenu}) => {
  const [openModal, setOpenModal] = useState(false); //clear msgs&delete chat modal
  const [openBlockModal, setOpenBlockModal] = useState(false); // block user modal
  const [action, setAction] = useState();

  const handleListItemClick = (value) => {
    setAction(value);
    setOpenModal(true);
  };

  return (
    <>
      <li className="list-item" onClick={() => setOpenRightMenu(true)}>Contact information</li>
      <li className="list-item">Select message</li>
      <li className="list-item" onClick={() => setCurrentChat(null)}>
        Close chat
      </li>
      <li className="list-item">Mute notifications</li>
      <li className="list-item">Timed messages</li>
      <li className="list-item" onClick={() => handleListItemClick("clear")}>
        Clear messages
      </li>
      <li className="list-item" onClick={() => handleListItemClick("delete")}>
        Delete chat
      </li>
      <li className="list-item" onClick={() => setOpenBlockModal(true)}>
        Block
      </li>
      <ClearMessages
        action={action}
        messages={messages}
        currentChat={currentChat}
        setCurrentChat={setCurrentChat}
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
      <BlockUser
        currentChat={currentChat}
        messages={messages}
        open={openBlockModal}
        onClose={() => setOpenBlockModal(false)}
      />
    </>
  );
};

export default NavbarDropdown;
