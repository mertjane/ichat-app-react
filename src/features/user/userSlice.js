import { createSlice } from "@reduxjs/toolkit";
import { getDetails } from "./services";

const initialState = {
  userInfo: {
    theme: "default",
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
      state.userInfo.theme = theme;
    }
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
      state.status = "failed";
      state.error = action.payload.message;
    });
  },
});

export const { updateAvatar, updateName, updateAbout, changeTheme } = userSlice.actions;
export default userSlice.reducer;
