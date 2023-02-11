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
      state.userMessages = [action.payload, ...state.userMessages];
    },
    messageReceivedCheck: (state, action) => {
      state.userMessages = state.userMessages.map((message) => {
        if (message.conversationId === action.payload) {
          return { ...message, isReceived: true };
        }
        return message;
      });
    },
    updateMessageReadStatus: (state, action) => {
      state.userMessages = state.userMessages.map((message) => {
        if (message.conversationId === action.payload.conversationId) {
          return { ...message, isRead: true };
        }
        return message;
      });
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

export const {
  sendNewMessage,
  deleteMessage,
  clearChat,
  updateMessage,
  messageReceivedCheck,
  updateMessageReadStatus,
} = messageSlice.actions;
export default messageSlice.reducer;
