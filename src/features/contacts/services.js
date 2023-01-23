import { createAsyncThunk } from "@reduxjs/toolkit";
import { getContactsURL, getBlockedURL, getUserURL } from "../apiCalls";
import { blockContact, unBlockContact, addContact, removeContact} from "./contactSlice"
import axios from "axios";

export const getContacts = createAsyncThunk('contacts/getContacts', async ({userId}) => {
  const res = await axios.get(`${getContactsURL}/${userId}`);
  return res.data;
});


export const getBlockedContacts = createAsyncThunk('contacts/getBlocked', async ({userId}) => {
  const res = await axios.get(`${getBlockedURL}/${userId}`);
  return res.data;
});

export const blockUser = async ({ userId, friendId}, dispatch) => {
  try {
    const res = await axios.put(`${getUserURL}/${userId}/block`, {friendId});
    dispatch(blockContact(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const unBlockUser = async ({ userId, friendId}, dispatch) => {
  try {
    const res = await axios.put(`${getUserURL}/${userId}/unblock`, {friendId});
    dispatch(unBlockContact(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const addUser = async ({ userId, friendId}, dispatch) => {
  try {
    const res = await axios.put(`${getUserURL}/${userId}/add`, {friendId});
    dispatch(addContact(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const removeUser = async ({ userId, friendId}, dispatch) => {
  try {
    const res = await axios.put(`${getUserURL}/${userId}/remove`, {friendId});
    dispatch(removeContact(res.data));
  } catch (err) {
    console.log(err);
  }
};





