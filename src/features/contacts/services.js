import { getContactsURL } from "../apiCalls";
import {loadContacts} from "./contactSlice"
import axios from "axios";

export const getContacts = async ({ userId }, dispatch) => {
  try {
    const res = await axios.get(`${getContactsURL}/${userId}`);
    dispatch(loadContacts(res.data));
  } catch (err) {
    console.log(err);
  }
};