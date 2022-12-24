import { InputWrapper } from "./Chat.styled";
import { BsEmojiSmile } from "react-icons/bs";
import { IoMdAttach } from "react-icons/io";

const Input = ({ handleForm, handleInput, newMessage}) => {

  return (
    <InputWrapper>
      <div className="btnGroup">
        <BsEmojiSmile className="btn" />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <IoMdAttach className="btn" />
        </label>
      </div>
      <form onSubmit={handleForm} className="textGroup">
        <input
          value={newMessage}
          onChange={handleInput}
          type="text"
          placeholder="Type a message"
        />
        <button type="submit">Send</button>
      </form>
    </InputWrapper>
  );
};

export default Input;
