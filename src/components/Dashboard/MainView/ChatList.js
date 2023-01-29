import Conversation from "./Conversation/Conversation";
import { useSelector } from "react-redux";
import { ListContainer } from "./MainView.styled";

const ChatList = ({ setCurrentChat, socket, query, currentChat }) => {
  const conversation = useSelector((state) => state.conversations.info);
  const { theme } = useSelector((state) => state.user.userInfo);

  return (
    <ListContainer theme={theme}>
      {query
        ? conversation
            .filter((c) =>
              c?.lastMessages?.[0]?.text?.toLowerCase().includes(query)
            )
            .map((c) => (
              <Conversation
                socket={socket}
                c={c}
                key={c?._id}
                setCurrentChat={setCurrentChat}
                currentChat={currentChat}
              />
            ))
        : conversation.map((c) => (
            <Conversation
              socket={socket}
              c={c}
              key={c?._id}
              setCurrentChat={setCurrentChat}
              currentChat={currentChat}
            />
          ))}
    </ListContainer>
  );
};

export default ChatList;
