import { configureStore } from "@reduxjs/toolkit";
import { loadUser } from "./auth/authSlice";
import authSlice from "./auth/authSlice";
import userSlice from "./user/userSlice";
import contactSlice from "./contacts/contactSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    contacts: contactSlice
  },
});


store.dispatch(loadUser(null));
