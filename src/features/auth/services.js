import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../apiCalls";

// Register
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, { rejectWithValue }) => {
    try {
      const token = await axios.post(`${url}/register`, {
        username: user.username,
        email: user.email,
        password: user.password,
      });

      localStorage.setItem("token", token.data);
      return token.data;
    } catch (err) {
      console.log(err.response.data);
      return rejectWithValue(err.response.data);
    }
  }
);

// Login
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, { rejectWithValue }) => {
    try {
      const token = await axios.post(`${url}/login`, {
        username: user.username,
        password: user.password,
        email: user.email,
      });
      localStorage.setItem("token", token.data);
      return token.data;
    } catch (error) {
      console.log(error.response);
      return rejectWithValue(error.response.data);
    }
  }
);
