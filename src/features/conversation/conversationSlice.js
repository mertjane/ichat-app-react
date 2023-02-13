import { createSlice } from "@reduxjs/toolkit";
import { getConversations } from "./services";

export const conversationSlice = createSlice({
  name: "conversations",
  initialState: {
    info: [],
    status: "idle",
    error: null,
  },
  reducers: {
    newConversation: (state, action) => {
      state.info = [...state.info, action.payload];
    },
    deleteChat: (state, action) => {
      state.info = state.info.filter(
        (conversation) => conversation._id !== action.payload
      );
    },
    clearNotification: (state, action) => {
      const newInfo = state.info.map((conversation) => {
        const newNotifications = conversation.notifications.filter(
          (notification) => notification.sender !== action.payload.userId
        );
        return { ...conversation, notifications: newNotifications };
      });
      return { ...state, info: newInfo };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getConversations.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getConversations.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.info = action.payload;
      })
      .addCase(getConversations.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export const { newConversation, deleteChat, clearNotification } =
  conversationSlice.actions;
export default conversationSlice.reducer;
