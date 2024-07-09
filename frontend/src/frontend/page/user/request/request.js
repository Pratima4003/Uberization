import React, { useState, useEffect } from "react";
import Sidebar from "../../../components/sidebar/sidebar";
import Navbar1 from "../../../components/header/navbar1";
import useData from "../../../components/useData/useData";

function Request() {
  const [error, setError] = useState(null);
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const { getUserData } = useData(); // Destructure getUserData from the custom hook

  useEffect(() => {
    const uD = getUserData();
    const fetchReqApps = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/findUserRequests?psno=${uD.psno}`
        );
        const result = await response.json();
        console.log(result.customUserRequest);
        if (!response.ok) {
          throw new Error("Failed to fetch requests");
        }
        setRequests(result.customUserRequest);
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
        <Sidebar />
        <main className="flex-1 overflow-x-hidden overflow-y-hidden bg-gray-400">
          <div className="container mx-auto px-6 py-8">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
              {requests.map((request) => (
                <div
                  key={request._id}
                  className="w-full bg-white rounded-lg shadow-md p-4 flex flex-col items-start"
                >
                  <div className="mb-4">
                    <p className="text-gray-500 mb-1 font-PTSerif">
                      PickUp Location: {request.pickupLocation}
                    </p>
                    <p className="text-gray-500 mb-1 font-PTSerif">
                      Drop Location: {request.dropLocation}
                    </p>
                    <p className="text-gray-500 mb-1 font-PTSerif">
                      Vehicle Allocated: {request.vehicle_model}
                    </p>
                    <p className="text-gray-500 mb-1 font-PTSerif">
                      Vehicle Number: {request.vehicle_number}
                    </p>
                    <p className="text-gray-500 mb-1 font-PTSerif">
                      Driver Assigned: {request.driver_name}
                    </p>
                    <p className="text-gray-500 mb-1 font-PTSerif">
                      Driver Contact: {request.driver_number}
                    </p>
                    <div>
                      <p
                        className={`font-bold text-2xl mb-2 font-PTSerif ${
                          request.req_status ? "text-green-500" : "text-red-500"
                        }`}
                      >
                        {request.req_status ? "Approved" : "Not Approved"}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Request;
