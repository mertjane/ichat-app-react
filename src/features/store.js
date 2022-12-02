import { configureStore } from "@reduxjs/toolkit";
import { loadUser } from "./auth/authSlice";
import authSlice from "./auth/authSlice";
import userSlice from "./user/userSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
  },
});


store.dispatch(loadUser(null));
