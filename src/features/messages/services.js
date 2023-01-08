import { loadMessages, sendNewMessage } from "./messageSlice";
import { getMessagesURL } from "../apiCalls";
import axios from "axios";

export const getMessages = async ({ currentChat, messages }, dispatch) => {
  try {
    const res = await axios.get(`${getMessagesURL}/${currentChat?._id}`, messages);
    dispatch(loadMessages(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const sendMessage = async (
  { currentChat, newMessage, userId },
  dispatch
) => {
  try {
    const message = {
      sender: userId,
      text: newMessage,
      conversationId: currentChat._id,
    };
    const res = await axios.post(`${getMessagesURL}`, message);
    dispatch(sendNewMessage(res.data));
  } catch (err) {
    console.log(err);
  }
};
