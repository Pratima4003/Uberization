import React, { useState, useEffect } from "react";
import AdminSidebar from "../../../components/sidebar/AdminSidebar";
import Navbar1 from "../../../components/header/navbar1";
import DriverFormPopup from "../../../components/formPop/DriverFormPopup";

function DriverDetails() {
  const [drivers, setDrivers] = useState([]);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);

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

  const handleAddDriver = async (driver) => {
    try {
      const response = await fetch("http://localhost:3000/newdriver", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(driver),
      });

      if (!response.ok) {
        throw new Error("Failed to add driver");
      }

      const newDriver = await response.json();
      setDrivers([...drivers, newDriver]);
      setShowForm(false);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="sticky-navbar">
        <Navbar1 isLoggedIn={true} />
      </div>
      <div className="flex h-auto bg-gray-200">
        <AdminSidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
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
                  Driver Details
                </h1>
              </div>
              <div className="flex space-x-4">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => setShowForm(true)}
                >
                  Add Driver
                </button>
              </div>
            </div>
          </header>

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
                      <p className="text-gray-500 mb-2">
                        Number: {driver.phno}
                      </p>
                      <p className="text-gray-500 mb-2">
                        License: {driver.license}
                      </p>

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
      </div>
      <DriverFormPopup
        show={showForm}
        onClose={() => setShowForm(false)}
        onSubmit={handleAddDriver}
      />
    </>
  );
}

export default DriverDetails;
