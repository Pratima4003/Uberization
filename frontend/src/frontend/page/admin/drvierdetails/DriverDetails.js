// displays the information of all drivers

import React, { useState, useEffect } from "react";
import AdminSidebar from "../../../components/sidebar/AdminSidebar";
import Navbar1 from "../../../components/header/navbar1";

function DriverDetails() {
  const [drivers, setDrivers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const response = await fetch("http://localhost:3000/findDriver");
        if (!response.ok) {
          throw new Error("Failed to fetch drivers");
        }
        const data = await response.json();
        setDrivers(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchDrivers();
  }, []);

  return (
    <>
      <div className="sticky-navbar">
        {/* Navbar */}
        <Navbar1 isLoggedIn={true} />
      </div>
      <div className="flex h-screen bg-gray-200">
        <AdminSidebar />
        {/* Main Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-400">
          <div className="container mx-auto px-6 py-8">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
              {drivers.map((driver) => (
                <div
                  key={driver._id}
                  className="w-full bg-white rounded-lg shadow-md p-4 flex items-center"
                >
                  <div className="relative w-39 h-32 overflow-hidden rounded-lg mr-4">
                    <img
                      // src={driver.imageUrl}
                      src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?uid=R96791781&ga=GA1.1.2082991712.1718443786&semt=sph"
                      className="object-cover w-full h-full"
                      alt="driver"
                    />
                  </div>
                  <div>
                    <h4 className="text-gray-700 text-lg font-medium mb-2">
                      {driver.name}
                    </h4>
                    <p className="text-gray-500 mb-2">Name: {driver.name}</p>
                    <p className="text-gray-500 mb-2">Number: {driver.phno}</p>
                    <p
                      className={`font-bold mb-2 ${
                        driver.available ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {driver.available ? "Available" : "Not Available"}
                    </p>
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

export default DriverDetails;
