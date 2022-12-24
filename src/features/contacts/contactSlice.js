import { createSlice } from "@reduxjs/toolkit";

export const contactSlice = createSlice({
  name: "contacts",
  initialState: {
    contactList: [],
  },
  reducers: {
    loadContacts: (state, action) => {
      state.contactList = action.payload
    }
  },
});

export const {loadContacts} = contactSlice.actions;
export default contactSlice.reducer;
