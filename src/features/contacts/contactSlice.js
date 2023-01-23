import { createSlice } from "@reduxjs/toolkit";
import { getContacts, getBlockedContacts } from "./services";

export const contactSlice = createSlice({
  name: "contacts",
  initialState: {
    contactList: [],
    blockedContacts: [],
    status: "idle",
    error: null,
  },
  reducers: {
    blockContact: (state, action) => {
      const { friendId } = action.payload;
      state.blockedContacts.push(friendId);
    },
    unBlockContact: (state, action) => {
      const { friendId } = action.payload;
      state.blockedContacts = state.blockedContacts.filter(
        (id) => id !== friendId
      );
    },
    addContact: (state, action) => {
      const { friendId } = action.payload;
      state.contactList.push(friendId);
    },
    removeContact: (state, action) => {
      const { friendId } = action.payload;
      state.contactList = state.contactList.filter((id) => id !== friendId);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getContacts.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getContacts.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.contactList = action.payload;
    });
    builder.addCase(getContacts.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error;
    });
    builder.addCase(getBlockedContacts.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getBlockedContacts.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.blockedContacts = action.payload;
    });
    builder.addCase(getBlockedContacts.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error;
    });
  },
});

export const { blockContact, unBlockContact, addContact, removeContact } =
  contactSlice.actions;
export default contactSlice.reducer;
