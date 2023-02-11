import Conversation from "./Conversation/Conversation";
import { useSelector } from "react-redux";
import { ListContainer } from "./MainView.styled";

const ChatList = ({
  setCurrentChat,
  query,
  currentChat,
  notifications,
  setNotifications,
}) => {
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
                c={c}
                key={c?._id}
                setCurrentChat={setCurrentChat}
                currentChat={currentChat}
                notifications={notifications}
                setNotifications={setNotifications}
              />
            ))
        : conversation.map((c) => (
            <Conversation
              c={c}
              key={c?._id}
              setCurrentChat={setCurrentChat}
              currentChat={currentChat}
              notifications={notifications}
              setNotifications={setNotifications}
            />
          ))}
    </ListContainer>
  );
};

export default ChatList;
