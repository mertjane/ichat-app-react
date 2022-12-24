import axios from "axios";
import { getUserURL, updateURL } from "../apiCalls";
import {
  loadDetails,
  updateName,
  updateAbout,
  updateAvatar,
} from "./userSlice";

// Get Current user Informations
export const getDetails = async ({ userInfo, userId }, dispatch) => {
  try {
    const res = await axios.get(`${getUserURL}/${userId}`, userInfo);
    dispatch(loadDetails(res.data));
  } catch (err) {
    console.log(err.response.data);
  }
};

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
