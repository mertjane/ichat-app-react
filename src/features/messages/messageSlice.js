import { createSlice } from "@reduxjs/toolkit";
import { getMessages } from "./services";

export const messageSlice = createSlice({
  name: "messages",
  initialState: {
    isLoading: false,
    userMessages: [],
    error: null,
  },
  reducers: {
    sendNewMessage: (state, action) => {
      const newMessage = action.payload;
      newMessage.isSent = true;
      state.userMessages = [newMessage, ...state.userMessages];
    },
    deleteMessage: (state, action) => {
      state.userMessages = state.userMessages.filter(
        (message) => message._id !== action.payload
      );
    },
    clearChat: (state, action) => {
      const { conversationId } = action.payload;
      state.userMessages = state.userMessages.filter(
        (message) => message.conversationId !== conversationId
      );
      state.unreadMessages[conversationId] = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMessages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMessages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userMessages = action.payload;
      })
      .addCase(getMessages.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { sendNewMessage, deleteMessage, clearChat } =
  messageSlice.actions;
export default messageSlice.reducer;
