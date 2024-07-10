import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/sidebar/sidebar";
import Navbar1 from "../../../components/header/navbar1";
import useData from "../../../components/useData/useData";

const Dashboard = () => {
  const { getUserData } = useData(); // Destructure getUserData from the custom hook
  const userData = getUserData();

  return (
    <>
      <div className="sticky-navbar">
        {/* Navbar */}
        <Navbar1 isLoggedIn={true} />
      </div>
      <div className="flex h-screen bg-gray-200">
        {/* Sidebar */}
        <Sidebar />

        {/* Content Area */}
        <div className="flex-1 flex flex-col overflow-y-hidden">
          {/* Top Navbar */}
          <header className="bg-gray w-full shadow flex">
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
                <h1 className="text-3xl text-left font-medium font-BonaNovaSC">
                  Welcome {userData ? userData.name : "Loading..."}!
                </h1>
              </div>
              <div className="flex space-x-4">
                <h1 className="text-3xl font-medium text-right font-BonaNovaSC">
                  PS No.: {userData ? userData.psno : "Loading..."}
                </h1>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-400">
            <div className="container mx-auto px-6 py-8">
              {/* Example Card Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
                <div className="w-full bg-white rounded-lg hover:bg-gray-100 shadow-md p-4">
                  <h4 className="text-gray-700 text-lg font-medium mb-4">
                    Total Requests
                  </h4>
                  <p className="text-gray-500">
                    Displays the total number of times user has booked vehicles.
                    {/* Assuming userData is an object with this information */}
                    {userData ? userData.bookingsCount : "Loading..."}
                  </p>
                </div>
                <div className="w-full bg-white rounded-lg hover:bg-gray-100 shadow-md p-4">
                  <h4 className="text-gray-700 text-lg font-medium mb-4">
                    Total Requests Pending for Approval
                  </h4>
                  <p className="text-gray-500">
                    Displays the number of requests pending (if user has
                    requested, else 0).
                    {/* Assuming userData is an object with this information */}
                    {userData ? userData.pendingRequests : "Loading..."}
                  </p>
                </div>
                <div className="w-full bg-white rounded-lg hover:bg-gray-100 shadow-md p-4">
                  <h4 className="text-gray-700 text-lg font-medium mb-4">
                    Frequently Visited
                  </h4>
                  <p className="text-gray-500">
                    Displays the name of place most frequently visited by the
                    user.
                    {/* Assuming userData is an object with this information */}
                    {userData ? userData.frequentPlace : "Loading..."}
                  </p>
                </div>
                <div className="w-full bg-white rounded-lg hover:bg-gray-100 shadow-md p-4">
                  <h4 className="text-gray-700 text-lg font-medium mb-4">
                    Frequently used car
                  </h4>
                  <p className="text-gray-500">
                    Displays the name of vehicle used frequently.
                    {/* Assuming userData is an object with this information */}
                    {userData ? userData.frequentCar : "Loading..."}
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
