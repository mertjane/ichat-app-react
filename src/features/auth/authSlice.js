import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import { registerUser, loginUser } from "./services";

const initialState = {
  token: localStorage.getItem("token"),
  username: "",
  email: "",
  userId: "",
  registerStatus: "idle",
  registerError: null,
  loginStatus: "idle",
  loginError: null,
  userLoaded: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loadUser(state) {
      const token = state.token;

      if (token) {
        const user = jwtDecode(token);
        return {
          ...state,
          token,
          username: user.username,
          email: user.email,
          userId: user._id,
          userLoaded: true,
        };
      }
    },
    logoutUser(state) {
      localStorage.removeItem("token");

      return {
        ...state,
        token: "",
        username: "",
        email: "",
        userId: "",
        userLoaded: false,
        registerStatus: "idle",
        registerError: null,
        loginStatus: "idle",
        loginError: null,
      };
    },
  },
  extraReducers: (builder) => {
    // USER REGISTER
    builder.addCase(registerUser.pending, (state) => {
      return { ...state, registerStatus: "pending" };
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      if (action.payload) {
        const user = jwtDecode(action.payload);

        return {
          ...state,
          token: action.payload,
          username: user.username,
          email: user.email,
          userId: user._id,
          registerStatus: "success",
        };
      } else return state;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      return {
        ...state,
        registerStatus: "rejected",
        registerError: action.payload,
      };
    });

    // USER LOGIN
    builder.addCase(loginUser.pending, (state) => {
      return { ...state, loginStatus: "pending" };
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      if (action.payload) {
        const user = jwtDecode(action.payload);
        return {
          ...state,
          token: action.payload,
          username: user.username,
          email: user.email,
          password: user.password,
          userId: user._id,
          loginStatus: "success",
        };
      } else return state;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      return {
        ...state,
        loginStatus: "rejected",
        loginError: action.payload,
      };
    });
  },
});

export const { loadUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
