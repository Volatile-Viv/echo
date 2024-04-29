import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/appwriteConfig";
import { logout } from "../../store/authSlice";
import { useNavigate } from "react-router";

function LogoutBtn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await authService.logout();
      dispatch(logout());
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <button className="px-3 rounded hover:bg-gray-800" onClick={logoutHandler}>
      Logout
    </button>
  );
}

export default LogoutBtn;
