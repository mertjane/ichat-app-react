import { createSlice } from "@reduxjs/toolkit";
import { getContacts } from "./services";

export const contactSlice = createSlice({
  name: "contacts",
  initialState: {
    contactList: [],
    loading: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // get Contacts
    builder.addCase(getContacts.pending, (state) => {
      return {
        ...state,
        loading: "pending",
      };
    });
    builder.addCase(getContacts.fulfilled, (state, action) => {
      return {
        ...state,
        loading: "success",
        contactList: action.payload,
      };
    });
    builder.addCase(getContacts.rejected, (state, action) => {
      return {
        ...state,
        loading: "rejected",
        error: action.payload.message,
      };
    });
  },
});

export default contactSlice.reducer;
