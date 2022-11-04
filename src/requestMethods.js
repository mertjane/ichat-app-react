import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjExZTRkNGYxZTU2NTY2NzUxZGI3NiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NzM4ODg2NiwiZXhwIjoxNjY3NDMyMDY2fQ.Ao5UdS4Zdp5Gx7T0eTTPZxKue-NdHYOd5W7Wx9wfJlM"
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});