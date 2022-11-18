import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logoutUser } from "../../../features/auth/authSlice";


const DropdownItem = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <>
      <li onClick={() => navigate("/profile")} className="menu-item">Profile</li>
      <li onClick={() => navigate("/settings")} className="menu-item">Settings</li>
      <li
        onClick={() => {
          dispatch(logoutUser(null));
          navigate("/login");
          toast.warning("Logged out", { position: "bottom-left" });
        }}
        className="menu-item"
      >
        Logout
      </li>
    </>
  );
};

export default DropdownItem;
