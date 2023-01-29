import { createAsyncThunk } from "@reduxjs/toolkit";
import { sendNewMessage, deleteMessage } from "./messageSlice";
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

/* export const sendMessage = async (
  { currentChat, newMessage, userId, image},
  dispatch
) => {
  try {
    const message = { 
      sender: userId,
      text: newMessage,
      conversationId: currentChat._id,
    };
    if(image){
      message.imageUrl = image;
    }
    const res = await axios.post(`${getMessagesURL}`, message);
    dispatch(sendNewMessage(res.data));
  } catch (err) {
    console.log(err);
  }
}; */

export const sendMessage = async (
  { currentChat, newMessage, userId, imageUrl},
  dispatch
) => {
  try {
    // create a new FormData object
    const formData = new FormData();
    // add the image file to the form data
    formData.append('image', imageUrl);
    // add the other message details to the form data
    formData.append('conversationId', currentChat._id);
    formData.append('sender', userId);
    formData.append('text', newMessage);

    // make the POST request to the server with the form data
    const res = await axios.post(`${getMessagesURL}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
    });

    dispatch(sendNewMessage(res.data));
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
