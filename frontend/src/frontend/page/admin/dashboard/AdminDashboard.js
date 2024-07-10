// Dashboard.js
import React, { useState, useEffect } from "react";
import Navbar1 from "../../../components/header/navbar1";
import AdminSidebar from "../../../components/sidebar/AdminSidebar";
import useData from "../../../components/useData/useData";

const AdminDashboard = () => {
  const { getUserData } = useData(); // Destructure getUserData from the custom hook
  const userData = getUserData();
  const [requests, setRequests] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReqApps = async () => {
      try {
        const response = await fetch("http://localhost:3000/findDetails");
        const result = await response.json();
        console.log(result);
        if (!response.ok) {
          throw new Error("Failed to fetch requests");
        }
        setRequests(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchReqApps();
  }, []);

  return (
    <>
      <div className="sticky-navbar">
        {/* Navbar */}
        <Navbar1 isLoggedIn={true} />
      </div>
      <div className="flex h-screen bg-gray-200">
        {/* Sidebar */}
        <AdminSidebar />
        {/* Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
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
                <div className="w-full bg-white rounded-lg shadow-md p-4">
                  <h4 className="text-gray-700 text-2xl font-Ubuntu font-medium mb-4">
                    Vehicle Details
                  </h4>
                  <div className="flex justify-between">
                    <p className="text-gray-500 text-lg font-Ubuntu">
                      Total Vehicles: {requests.vehicles}
                    </p>
                    <a
                      href="/vehicledetails"
                      className="text-gray-600 hover:text-gray-900 text-lg font-Ubuntu font-bold text-right"
                    >
                      Click to view details
                    </a>
                  </div>
                </div>
                <div className="w-full bg-white rounded-lg shadow-md p-4">
                  <h4 className="text-gray-700 text-2xl font-Ubuntu font-medium mb-4">
                    Drivers Details
                  </h4>
                  <div className="flex justify-between">
                    <p className="text-gray-500 text-lg font-Ubuntu">
                      Total Drivers: {requests.drivers}
                    </p>
                    <a
                      href="/driverdetails"
                      className="text-gray-600 hover:text-gray-900 text-lg font-Ubuntu font-bold text-right"
                    >
                      Click to view details
                    </a>
                  </div>
                </div>
                <div className="w-full bg-white rounded-lg shadow-md p-4">
                  <h4 className="text-gray-700 text-2xl font-Ubuntu font-medium mb-4">
                    Requests To Approve
                  </h4>
                  <div className="flex justify-between">
                    <p className="text-gray-500 text-lg font-Ubuntu">
                      Total Requests for Approval:{" "}
                      {requests.requestsForApproval}
                    </p>
                    <a
                      href="/requestapproval"
                      className="text-gray-600 hover:text-gray-900 text-lg font-Ubuntu font-bold text-right"
                    >
                      Click to view details
                    </a>
                  </div>
                </div>
                <div className="w-full bg-white rounded-lg shadow-md p-4">
                  <h4 className="text-gray-700 text-2xl font-medium mb-4 font-Ubuntu">
                    Track Vehicles
                  </h4>
                  <p className="text-gray-500 text-lg font-Ubuntu">
                    <a href="/track">
                      <u className="hover:text-gray-900">Click Here</u>
                    </a>{" "}
                    to open map and track location of all the vehicles.
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

export default AdminDashboard;
