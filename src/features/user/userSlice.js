import { createSlice } from "@reduxjs/toolkit";
import { getDetails } from "./services";

const initialState = {
  userInfo: {
    theme: localStorage.getItem('theme') || 'default',
    chatWallpaper: "",
    drawings: true,
    avatar: "",
    name: "",
    about: "",
  },
  status: "idle",
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateAvatar: (state, { payload: { avatar } }) => {
      state.userInfo.avatar = avatar;
    },
    updateName: (state, { payload: { name } }) => {
      state.userInfo.name = name;
    },
    updateAbout: (state, { payload: { about } }) => {
      state.userInfo.about = about;
    },
    changeTheme: (state, { payload: { theme } }) => {
      localStorage.setItem('theme', theme);
      state.userInfo.theme = theme;
    },
    changeWallpaper: (state, { payload: { chatWallpaper } }) => {
      state.userInfo.chatWallpaper = chatWallpaper;
    },
    changeDrawings: (state, { payload: { drawings } }) => {
      state.userInfo.drawings = drawings;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDetails.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getDetails.fulfilled, (state, action) => {
      state.userInfo = action.payload;
      state.status = "success";
    });
    builder.addCase(getDetails.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.payload.message;
    });
  },
});

export const {
  updateAvatar,
  updateName,
  updateAbout,
  changeTheme,
  changeWallpaper,
  changeDrawings,
} = userSlice.actions;
export default userSlice.reducer;
