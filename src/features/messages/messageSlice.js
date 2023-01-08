import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
  name: "messages",
  initialState: {
    userMessages: [],
    page: 1,
  },
  reducers: {
    loadMessages: (state, action) => {
      state.userMessages = action.payload;
    },
    loadMoreMessages: (state, action) => {
      state.page = action.payload + 1
    },
    sendNewMessage: (state, action) => {
      state.userMessages = [...state.userMessages, action.payload];
    },
  },
  extraReducers: {},
});

export const { loadMessages, sendNewMessage, loadMoreMessages } = messageSlice.actions;
export default messageSlice.reducer;
