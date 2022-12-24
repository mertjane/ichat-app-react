import { configureStore } from "@reduxjs/toolkit";
import { loadUser } from "./auth/authSlice";
import authSlice from "./auth/authSlice";
import userSlice from "./user/userSlice";
import contactSlice from "./contacts/contactSlice";
import conversationSlice from "./conversation/conversationSlice";
import messageSlice from "./messages/messageSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    contacts: contactSlice,
    conversations: conversationSlice,
    messages: messageSlice
  },
});




store.dispatch(loadUser(null));
export default store;
