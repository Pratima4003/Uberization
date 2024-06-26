// this page gives details about the requests that have come to the admin

import React, { useState } from "react";
import AdminSidebar from "../../../components/sidebar/AdminSidebar";
import Navbar1 from "../../../components/header/navbar1";

function RequestApproval() {
  // State to manage which card is expanded
  const [expandedCard, setExpandedCard] = useState(null);
  // State to manage the checkbox for vehicle and driver availability
  const [vehicleUnavailable, setVehicleUnavailable] = useState(false);
  const [driverUnavailable, setDriverUnavailable] = useState(false);

  // Function to toggle expanded state
  const toggleExpand = (cardId) => {
    if (expandedCard === cardId) {
      setExpandedCard(null);
    } else {
      setExpandedCard(cardId);
    }
  };

  //   once the buttons are clicked and checkboxes are checked, update in database immediately
  // Function to handle checkbox change for vehicle
  const handleVehicleCheckboxChange = (e) => {
    setVehicleUnavailable(e.target.checked);
  };

  // Function to handle checkbox change for driver
  const handleDriverCheckboxChange = (e) => {
    setDriverUnavailable(e.target.checked);
  };

  return (
    <>
      {/* Navbar */}
      <Navbar1 isLoggedIn={true} />
      <div className="flex h-auto bg-gray-200">
        <AdminSidebar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="container mx-auto px-6 py-8">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-1 gap-6 mt-8">
              <div className="w-full bg-white rounded-lg shadow-md p-4 flex items-center">
                <div>
                  <h4 className="text-gray-700 text-lg font-medium mb-2">
                    Request 1
                  </h4>
                  <p className="text-gray-500 mb-2">Request By: Name1</p>
                  <p className="text-gray-500 mb-2">
                    Requested User's PS Number: psno
                  </p>
                  <p className="text-gray-500 mb-2">Pickup Location</p>
                  <p className="text-gray-500 mb-2">Drop Location</p>
                  <p className="text-gray-500 mb-2">Pickup Date</p>
                  <p className="text-gray-500 mb-2">Pickup Time</p>
                  <div className="flex space-x-4">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded"
                      onClick={() => toggleExpand(1)}
                    >
                      Allocate
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded"
                      onClick={() => toggleExpand(1)}
                    >
                      Cannot Allocate
                    </button>
                  </div>
                  {expandedCard === 1 && (
                    <div className="mt-4">
                      {/* Additional content when expanded */}
                      <p className="text-gray-500 mb-2">
                        Additional details...
                      </p>
                      <div className="flex flex-col">
                        <div className="flex items-center mb-2">
                          <input
                            type="checkbox"
                            id="vehicleUnavailable1"
                            className="mr-2"
                            checked={vehicleUnavailable}
                            onChange={handleVehicleCheckboxChange}
                          />
                          <label
                            htmlFor="vehicleUnavailable1"
                            className="text-gray-700"
                          >
                            Vehicle Unavailable
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="driverUnavailable1"
                            className="mr-2"
                            checked={driverUnavailable}
                            onChange={handleDriverCheckboxChange}
                          />
                          <label
                            htmlFor="driverUnavailable1"
                            className="text-gray-700"
                          >
                            Driver Unavailable
                          </label>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="w-full bg-white rounded-lg shadow-md p-4 flex items-center">
                <div>
                  <h4 className="text-gray-700 text-lg font-medium mb-2">
                    Request 2
                  </h4>
                  <p className="text-gray-500 mb-2">Requested: Name2</p>
                  <p className="text-gray-500 mb-2">
                    Requested User's PS Number: psno
                  </p>
                  <p className="text-gray-500 mb-2">Pickup Location</p>
                  <p className="text-gray-500 mb-2">Drop Location</p>
                  <p className="text-gray-500 mb-2">Pickup Date</p>
                  <p className="text-gray-500 mb-2">Pickup Time</p>
                  <div className="flex space-x-4">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded"
                      onClick={() => toggleExpand(2)}
                    >
                      Allocate
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded"
                      onClick={() => toggleExpand(2)}
                    >
                      Cannot Allocate
                    </button>
                  </div>
                  {expandedCard === 2 && (
                    <div className="mt-4">
                      {/* Additional content when expanded */}
                      <p className="text-gray-500 mb-2">
                        Additional details...
                      </p>
                      <div className="flex flex-col">
                        <div className="flex items-center mb-2">
                          <input
                            type="checkbox"
                            id="vehicleUnavailable2"
                            className="mr-2"
                            checked={vehicleUnavailable}
                            onChange={handleVehicleCheckboxChange}
                          />
                          <label
                            htmlFor="vehicleUnavailable2"
                            className="text-gray-700"
                          >
                            Vehicle Unavailable
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="driverUnavailable2"
                            className="mr-2"
                            checked={driverUnavailable}
                            onChange={handleDriverCheckboxChange}
                          />
                          <label
                            htmlFor="driverUnavailable2"
                            className="text-gray-700"
                          >
                            Driver Unavailable
                          </label>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default RequestApproval;
