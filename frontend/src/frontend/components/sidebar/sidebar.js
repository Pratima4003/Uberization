// Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import useData from "../useData/useData";

const Sidebar = () => {
  const { getUserData } = useData(); // Destructure getUserData from the custom hook
  const uD = getUserData();
  return (
    <div className="bg-gray-800 text-gray-100 w-60 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <h2 className="text-2xl font-semibold uppercase">{uD.name}</h2>
      <nav>
        <Link
          to="/dashboard"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          Dashboard
        </Link>
        <Link
          to="/requestform"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          New Request
        </Link>
        <Link
          to="/request"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          Your Requests
        </Link>
        <Link
          to="/trackvehicle"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          Track Vehicle
        </Link>
        <Link
          to="#"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-red-700 hover:text-white"
        >
          Logout
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
