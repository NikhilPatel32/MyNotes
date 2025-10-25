import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-between bg-gray-800 shadow px-6 py-3">
      <h2 className="text-2xl font-semibold text-white font-serif">My Notes</h2>
      {user && (
        <div className="flex items-center gap-4">
          <img
            src={user.picture}
            alt="user"
            className="w-9 h-9 rounded-full border"
            referrerPolicy="no-referrer"
          />
          <button
            onClick={handleLogout}
            className="text-sm bg-gray-600 text-white px-3 py-1 rounded-md hover:bg-gray-700 
            hover:cursor-pointer hover:scale-95"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
