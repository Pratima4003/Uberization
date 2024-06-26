// Dashboard.js
import React from "react";
import Navbar1 from "../../../components/header/navbar1";
import AdminSidebar from "../../../components/sidebar/AdminSidebar";

const AdminDashboard = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar1 isLoggedIn={true} />
      <div className="flex h-screen bg-gray-200">
        {/* Sidebar */}
        <AdminSidebar />
        {/* Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Top Navbar */}
          <header className="bg-white w-full shadow flex">
            <div className="flex w-full justify-between px-6 py-4">
              <div className="flex space-x-4">
                <button className="text-gray-600 focus:outline-none md:hidden">
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 6H20M4 12H20M4 18H20"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <h1 className="text-xl text-left font-medium">
                  Welcome Admin!
                </h1>
              </div>
              <div className="flex space-x-4">
                <h1 className="text-xl font-medium text-right">
                  PS No.: 123456
                </h1>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
            <div className="container mx-auto px-6 py-8">
              {/* Example Card Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
                <a href="/vehicledetails">
                  <div className="w-full bg-white rounded-lg hover:bg-gray-100 shadow-md p-4">
                    <h4 className="text-gray-700 text-lg font-medium mb-4">
                      Vehicle Details
                    </h4>
                    <p className="text-gray-500">
                      Displays the information like car model, number plate,
                      photo, availability(color coded) etc. of all cars.
                    </p>
                  </div>
                </a>
                <a href="/driverdetails">
                  <div className="w-full bg-white rounded-lg hover:bg-gray-100 shadow-md p-4">
                    <h4 className="text-gray-700 text-lg font-medium mb-4">
                      Drivers Details
                    </h4>
                    <p className="text-gray-500">
                      Displays the information details like license, name,
                      address, phone number etc. of all the drivers.
                    </p>
                  </div>
                </a>
                <a href="/requestapproval">
                  <div className="w-full bg-white rounded-lg hover:bg-gray-100 shadow-md p-4">
                    <h4 className="text-gray-700 text-lg font-medium mb-4">
                      Requests To Approve
                    </h4>
                    <p className="text-gray-500">
                      Displays the details of requests that are pending to
                      approve by the admin.
                    </p>
                  </div>
                </a>
                <a href="/track">
                  <div className="w-full bg-white rounded-lg hover:bg-gray-100 shadow-md p-4">
                    <h4 className="text-gray-700 text-lg font-medium mb-4">
                      Track Vehicles
                    </h4>
                    <p className="text-gray-500">
                      Open map and track location of all the vehicles.
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
