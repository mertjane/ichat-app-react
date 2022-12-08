import { createAsyncThunk } from "@reduxjs/toolkit";
import { getContactsURL } from "../apiCalls";
import axios from "axios";

// Get Contacts
export const getContacts = createAsyncThunk(
  "contacts/getContacts",
  async ({ user, userId }) => {
    try {
      const { data } = await axios.get(`${getContactsURL}/${userId}`, user);
      return data;
    } catch (error) {
      console.log(error.response.data);
    }
  }
);

/* export const addContact = async ({ userId, id }, dispatch) => {
  dispatch(addContactStart());
  try {
    const newUser = {
      userId,
    };
    const { data } = await axios.put(`${addContactURL}/${id}/add`, newUser);
    dispatch(addContactSuccess(data));
  } catch (err) {
    dispatch(addContactFailed(err));
  }
}; */
