import Conversation from "./Conversation/Conversation";
import { useSelector } from "react-redux";
import { ListContainer } from "./MainView.styled";

const ChatList = ({ setCurrentChat, socket, query }) => {
  const conversation = useSelector((state) => state.conversations.info);
  const { theme } = useSelector((state) => state.user.userInfo);

  return (
    <ListContainer theme={theme}>
      {conversation
        ?.filter((c) => c?.lastMessages?.[0]?.text.toLowerCase().includes(query))
        ?.map((c) => (
          <Conversation
            socket={socket}
            c={c}
            key={c?._id}
            setCurrentChat={setCurrentChat}
          />
        ))}
    </ListContainer>
  );
};

export default ChatList;
