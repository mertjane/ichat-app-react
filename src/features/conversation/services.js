import { loadConversations, newConversation } from "./conversationSlice";
import { getConversationURL } from "../apiCalls";
import axios from "axios";

export const getConversations = async ({ userId }, dispatch) => {
  try {
    const res = await axios.get(`${getConversationURL}/${userId}`);
    dispatch(loadConversations(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const startConversation = async ({members}, dispatch) => {
  try {
    const res = await axios.post(`${getConversationURL}`, members);
    dispatch(newConversation(res.data));
  } catch(err) {
    console.log(err)
  }
}
