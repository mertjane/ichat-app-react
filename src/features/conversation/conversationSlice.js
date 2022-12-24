import { createSlice } from "@reduxjs/toolkit";

export const conversationSlice = createSlice({
  name: "conversations",
  initialState: {
    info: [],
  },
  reducers: {
    loadConversations: (state, action) => {
      state.info = action.payload;
    },
    newConversation: (state, action) => {
      state.info = [...state.info, action.payload];
    },
  },
  extraReducers: {},
});

export const { loadConversations, newConversation } = conversationSlice.actions;
export default conversationSlice.reducer;
