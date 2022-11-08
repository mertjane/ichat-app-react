import { configureStore } from "@reduxjs/toolkit";
import { loadUser } from "./auth/authSlice";
import authSlice from "./auth/authSlice";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage,
// };
// const persistedReducer = persistReducer(persistConfig, authSlice);

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware(
  //     // serializableCheck: {
  //     //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     // },
  //   ).concat(),
});

store.dispatch(loadUser(null))

// export let persistor = persistStore(store);
