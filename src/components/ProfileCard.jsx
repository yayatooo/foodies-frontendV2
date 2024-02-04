import React from "react";
import axios from "axios";
import loginStore from "../store/loginStore";
import { useNavigate } from "react-router-dom";

const ProfileCard = () => {
  const { user, logout } = loginStore();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.post("http://localhost:3000/logout", null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Clear the local state
      logout();

      // Clear the token from local storage
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      // Redirect to the login page or another page after logout
      navigate("/login");
      console.log(logout.user);
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  return (
    <div className="flex w-full h-24 p-4 justify-between items-center rounded-lg shadow-lg mt-6">
      <div className="flex gap-x-4">
        <img src="./download.png" alt="profile" className="rounded-full w-16" />
        <div className="flex flex-col justify-center">
          {user ? (
            <>
              <h2 className="font-semibold">{user.fullName}</h2>
              <h3 className="font-extralight text-gray-300">{user.email}</h3>
            </>
          ) : (
            <>
              <h2 className="font-semibold">null</h2>
              <h3 className="font-extralight text-gray-300">null</h3>
            </>
          )}
        </div>
      </div>
      <button onClick={handleLogout} className="text-red-600">
        Logout
      </button>
    </div>
  );
};

export default ProfileCard;
