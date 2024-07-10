// Admin sidebar

import React from "react";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className="bg-gray-800 text-gray-100 w-50 space-y-6 py-7 px-5 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <h2 className="text-3xl text-center font-semibold font-BonaNovaSC">
        Admin
      </h2>
      <nav>
        <Link
          to="/adminDashboard"
          className="font-Ubuntu text-lg block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          Dashboard
        </Link>
        <Link
          to="/vehicledetails"
          className="font-Ubuntu text-lg block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          Vehicle Details
        </Link>
        <Link
          to="/driverdetails"
          className="font-Ubuntu text-lg block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          Drivers Details
        </Link>
        <Link
          to="/requestapproval"
          className="font-Ubuntu text-lg block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          Request Approval
        </Link>
        {/* <Link to="/pendingrequest" className="block py-2.5 px-3 rounded transition duration-200 hover:bg-gray-700 hover:text-white">Pending Requests</Link> */}
        <Link
          to="/track"
          target="blank"
          className="font-Ubuntu text-lg block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          Track Vehicle
        </Link>
        <Link
          to="/map"
          target="blank"
          className="font-Ubuntu text-lg block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          Track Live
        </Link>
        <Link
          to="#"
          className="font-Ubuntu text-lg block py-2.5 px-4 rounded transition duration-200 hover:bg-red-700 hover:text-white"
        >
          Logout
        </Link>
      </nav>
    </div>
  );
};

export default AdminSidebar;
