// adminSidebar.js
import React from 'react';

const AdminSidebar = () => {
  return (
    <div className="bg-gray-800 text-gray-100 w-60 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <h2 className="text-2xl font-semibold uppercase">Dashboard</h2>
      <nav>
        <a href="/adminDashboard" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">Dashboard</a>
        <a href="/vehicledetails" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">Vehicle Details</a>
        <a href="/driverdetails" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">Drivers Details</a>
        <a href="/requestapproval" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">Request Approval</a>
        <a href="/pendingrequest" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">Pending Requests</a>
        <a href="/track" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">Track Vehicle</a>
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-red-700 hover:text-white">Logout</a>
      </nav>
    </div>
  );
};

export default AdminSidebar;
