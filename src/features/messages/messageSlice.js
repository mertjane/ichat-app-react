import { createSlice } from "@reduxjs/toolkit";
import { getMessages } from "./services";

export const messageSlice = createSlice({
  name: "messages",
  initialState: {
    isLoading: false,
    userMessages: [],
    unreadMessages: {},
    error: null,
  },
  reducers: {
    sendNewMessage: (state, action) => {
      state.userMessages = [action.payload, ...state.userMessages];
      const { conversationId } = action.payload;
      state.unreadMessages[conversationId] =
        (state.unreadMessages[conversationId] || 0) + 1;
    },
    markAsRead: (state, action) => {
      state.unreadMessages[action.payload] = 0;
    },
    deleteMessage: (state, action) => {
      state.userMessages = state.userMessages.filter(
        (message) => message._id !== action.payload
      );
    }
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

export const { sendNewMessage, markAsRead, deleteMessage} = messageSlice.actions;
export default messageSlice.reducer;
