import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  sendNewMessage,
  deleteMessage,
  clearChat,
  messageReceivedCheck,
  updateMessageReadStatus
} from "./messageSlice";
import { getMessagesURL } from "../apiCalls";
import axios from "axios";

export const getMessages = createAsyncThunk(
  "messages/getMessages",
  async (args, thunkAPI) => {
    try {
      const { currentChat, messages } = args;
      const res = await axios.get(
        `${getMessagesURL}/${currentChat?._id}`,
        messages
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const sendMessage = async (
  { currentChat, newMessage, userId, imageUrl },
  dispatch
) => {
  try {
    if (Array.isArray(imageUrl)) {
      imageUrl.forEach(async (image) => {
        const formData = new FormData();
        formData.append("image", image);
        formData.append("conversationId", currentChat._id);
        formData.append("sender", userId);
        formData.append("text", newMessage);

        const res = await axios.post(`${getMessagesURL}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        dispatch(sendNewMessage(res.data));
      });
    } else {
      const formData = new FormData();
      if (imageUrl) {
        formData.append("image", imageUrl);
      } else {
        formData.append("conversationId", currentChat._id);
        formData.append("sender", userId);
        formData.append("text", newMessage);
      }
      const res = await axios.post(`${getMessagesURL}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      dispatch(sendNewMessage(res.data));
    }
  } catch (err) {
    console.error(err);
  }
};

export const updateReceivedCheck = async ({ currentChat }, dispatch) => {
  try {
    const res = await axios.put(`${getMessagesURL}/${currentChat._id}`);
    dispatch(messageReceivedCheck(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const updateReadReceipt = async ({ currentChat, receiverId}, dispatch) => {
  try {
    const res = await axios.put(`${getMessagesURL}/${currentChat._id}/update-isRead`, {
      isRead: true,
      sender: receiverId
    });
    dispatch(updateMessageReadStatus(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const removeMessage = async ({ currentChat, message }, dispatch) => {
  try {
    const res = await axios.delete(
      `${getMessagesURL}/${currentChat._id}/${message._id}`
    );
    dispatch(deleteMessage(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const clearMessages = async ({ currentChat }, dispatch) => {
  try {
    const res = await axios.delete(`${getMessagesURL}/${currentChat._id}`);
    dispatch(clearChat(res.data));
  } catch (error) {
    console.log(error);
  }
};
