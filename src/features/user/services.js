import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getUserURL, updateURL } from "../apiCalls";
import {
  updateName,
  updateAbout,
  updateAvatar,
  changeTheme,
  changeWallpaper,
  changeDrawings,
} from "./userSlice";

// update user theme
export const updateTheme = async ({ userId, theme }, dispatch) => {
  try {
    const res = await axios.put(`${getUserURL}/${userId}/theme`, { theme });
    dispatch(changeTheme(res.data));
  } catch (error) {
    console.log(error);
  }
};

// update chatWallpaper
export const updateWallpaper = async ({ userId, color }, dispatch) => {
  try {
    const res = await axios.put(
      `${getUserURL}/${userId}/update-chat-wallpaper`,
      { color }
    );
    dispatch(changeWallpaper(res.data));
  } catch (error) {
    console.log(error);
  }
};

// on/off drawings
export const toggleDrawings = async ({ userId, drawings }, dispatch) => {
  try {
    const res = await axios.put(
      `${getUserURL}/${userId}/update-chat-drawing`,
      { drawings }
    );
    dispatch(changeDrawings(res.data));
  } catch (error) {
    console.log(error);
  }
};

// fetch user details
export const getDetails = createAsyncThunk(
  "user/getDetails",
  async ({ userId }) => {
    const res = await axios.get(`${getUserURL}/${userId}`);
    return res.data;
  }
);

// Update Name
export const updatedName = async ({ name, id }, dispatch) => {
  try {
    const user = {
      name,
    };
    const { data } = await axios.put(`${updateURL}/${id}`, user);
    dispatch(updateName(data));
  } catch (err) {
    console.log(err.response.data);
  }
};

// Update About
export const updatedAbout = async ({ about, id }, dispatch) => {
  try {
    const user = {
      about,
    };
    const { data } = await axios.put(`${updateURL}/${id}`, user);
    dispatch(updateAbout(data));
  } catch (err) {
    console.log(err.response.data);
  }
};

// Update Avatar
export const updatedAvatar = async ({ file, avatar, id }, dispatch) => {
  const newAvatar = {
    image: avatar,
  };
  const formData = new FormData();
  console.log(formData);
  const fileName = file.name;
  formData.append("avatar", file);
  newAvatar.avatar = fileName;
  try {
    axios.post(`${updateURL}/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  } catch (err) {
    console.log(err);
  }
  try {
    const { data } = axios.put(`${updateURL}/${id}`, newAvatar);
    dispatch(updateAvatar(data));
  } catch (err) {}
};
