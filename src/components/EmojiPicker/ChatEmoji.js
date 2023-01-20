import React from "react";
import Picker from "emoji-picker-react";

const ChatEmoji = ({ onEmojiClick }) => {
  return (
    <Picker
      disableSkinTonePicker={true}
      searchPlaceholder="Search emoji"
      onEmojiClick={onEmojiClick}
    />
  );
};

export default ChatEmoji;