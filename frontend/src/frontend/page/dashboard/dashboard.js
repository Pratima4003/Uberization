// Dashboard.js
import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import Navbar1 from "../../components/header/navbar1";

const Dashboard = () => {
  const isLoggedIn = true;
  return (
    <>
      {/* Navbar */}
      <Navbar1 isLoggedIn={true} />
      <div className="flex h-screen bg-gray-200">
        {/* Sidebar */}
        <Sidebar />

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
                <h1 className="text-xl text-left font-medium">Welcome User!</h1>
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
                <div className="w-full bg-white rounded-lg hover:bg-gray-100 shadow-md p-4">
                  <h4 className="text-gray-700 text-lg font-medium mb-4">
                    Number of times vehicles booked
                  </h4>
                  <p className="text-gray-500">
                    Displays the total number of times user has booked vehicles.
                    (dynamic value from database)
                  </p>
                </div>
                <div className="w-full bg-white rounded-lg hover:bg-gray-100 shadow-md p-4">
                  <h4 className="text-gray-700 text-lg font-medium mb-4">
                    Requests Pending
                  </h4>
                  <p className="text-gray-500">
                    Displays the number of requests pending(if user has
                    requested, else 0).
                  </p>
                </div>
                <div className="w-full bg-white rounded-lg hover:bg-gray-100 shadow-md p-4">
                  <h4 className="text-gray-700 text-lg font-medium mb-4">
                    Frequently Visited
                  </h4>
                  <p className="text-gray-500">
                    Displays the name of place most frequently visited by the
                    user.
                  </p>
                </div>
                <div className="w-full bg-white rounded-lg hover:bg-gray-100 shadow-md p-4">
                  <h4 className="text-gray-700 text-lg font-medium mb-4">
                    Frequently used car
                  </h4>
                  <p className="text-gray-500">
                    Displays the name of vehicle used frequently.
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
