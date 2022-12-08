import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {
    avatar: "",
    name: "",
    about: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadDetails: (state, action) => {
      state.userInfo = action.payload;
    },
    updateAvatar: (state, { payload: { avatar } }) => {
      state.userInfo.avatar = avatar;
    },
    updateName: (state, { payload: { name } }) => {
      state.userInfo.name = name;
    },
    updateAbout: (state, { payload: { about } }) => {
      state.userInfo.about = about;
    },
  },
});

export const { loadDetails,loadContacts, updateAvatar, updateName, updateAbout } =
  userSlice.actions;
export default userSlice.reducer;
