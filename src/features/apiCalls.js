/* import { updateStart, updateSuccess, updateFailed } from "./auth/authSlice";
import axios from "axios"; */
export const url = "http://localhost:5000/api";

export const updateURL = "http://localhost:5000/api/user";

export const getUserURL = "http://localhost:5000/api/user";

/* export const updateUser = async (userDetails, dispatch) => {
  dispatch(updateStart());
  try {
    const res = await axios.put(`${updateURL}/profile`, userDetails);
    dispatch(updateSuccess(res.data));
  } catch (err) {
    dispatch(updateFailed(err.response.data));
  }
};
 */