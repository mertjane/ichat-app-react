import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  newConversation,
  deleteChat,
  clearNotification,
} from "./conversationSlice";
import { getConversationURL } from "../apiCalls";
import axios from "axios";

export const getConversations = createAsyncThunk(
  "conversations/loadConversations",
  async ({ userId }) => {
    const res = await axios.get(`${getConversationURL}/${userId}`);
    return res.data;
  }
);

export const startConversation = async ({ members }, dispatch) => {
  try {
    const res = await axios.post(`${getConversationURL}`, members);
    dispatch(newConversation(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const deleteConversation = async ({ conversationId }, dispatch) => {
  try {
    const res = await axios.delete(`${getConversationURL}/${conversationId}`);
    dispatch(deleteChat(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const clearNewNotifications = async ({ c, userId }, dispatch) => {
  try {
    const res = await axios.delete(`${getConversationURL}/${c?._id}/${userId}`);
    dispatch(clearNotification(res.data));
  } catch (err) {
    console.log(err);
  }
};
