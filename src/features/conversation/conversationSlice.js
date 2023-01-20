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
    /* loadConversations: (state, action) => {
      state.info = action.payload;
    }, */
    newConversation: (state, action) => {
      state.info = [...state.info, action.payload];
    },
    deleteChat: (state, action) => {
      state.info = state.info.filter(
        (conversation) => conversation._id !== action.payload
      );
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
        state.error = action.error.message;
      });
  },
});

export const { newConversation, deleteChat} = conversationSlice.actions;
export default conversationSlice.reducer;
