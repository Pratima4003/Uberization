import React, { useState, useEffect } from "react";
import AdminSidebar from "../../../components/sidebar/AdminSidebar";
import Navbar1 from "../../../components/header/navbar1";
import { useNavigate } from "react-router-dom";

function RequestApproval() {
  // State to manage which card is expanded
  const [expandedCard, setExpandedCard] = useState(null);
  // State to track selected vehicle and driver
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [selectedDriver, setSelectedDriver] = useState("");

  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [availableVehicles, setAvailableVehicles] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [availableDrivers, setAvailableDrivers] = useState([]);
  const navigate = useNavigate();

  const fetchAvailableData = async () => {
    try {
      const vehiclesResponse = await fetch("http://localhost:3000/findVehicle");
      if (!vehiclesResponse.ok) {
        throw new Error("Failed to fetch available vehicles");
      }
      const vehiclesData = await vehiclesResponse.json();
      // Filter available vehicles
      const filteredVehicles = vehiclesData.filter(
        (vehicle) => vehicle.available
      );
      setAvailableVehicles(filteredVehicles);

      const driversResponse = await fetch("http://localhost:3000/findDriver");
      if (!driversResponse.ok) {
        throw new Error("Failed to fetch available drivers");
      }
      const driversData = await driversResponse.json();
      // Filter available drivers
      const filteredDrivers = driversData.filter((driver) => driver.available);
      setAvailableDrivers(filteredDrivers);
    } catch (err) {
      console.error("Error fetching available data:", err.message);
    }
  };

  useEffect(() => {
    const fetchReqApps = async () => {
      try {
        const response = await fetch("http://localhost:3000/findRequests");
        if (!response.ok) {
          throw new Error("Failed to fetch requests");
        }
        const data = await response.json();
        setRequests(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReqApps();
    fetchAvailableData();
  }, []);

  // Function to handle approval and update database
  const handleApprove = async (requestId) => {
    try {
      // Update database with selected vehicle and driver availability as false
      await fetch(`http://localhost:3000/updateRequest/${requestId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          vehicleId: selectedVehicle,
          driverId: selectedDriver,
        }),
      });

      setRequests((prevRequests) =>
        prevRequests.map((request) =>
          request._id === requestId
            ? {
                ...request,
                req_status: true,
                vehicle_model: availableVehicles.find(
                  (vehicle) => vehicle._id === selectedVehicle
                ).model_name,
                vehicle_number: availableVehicles.find(
                  (vehicle) => vehicle._id === selectedVehicle
                ).number,
                driver_name: availableDrivers.find(
                  (driver) => driver._id === selectedDriver
                ).name,
                driver_number: availableDrivers.find(
                  (driver) => driver._id === selectedDriver
                ).phno,
              }
            : request
        )
      );

      // Reload data after update
      // Refetch available vehicles and drivers
      fetchAvailableData();
    } catch (error) {
      console.error("Error updating request:", error);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Function to toggle expanded state
  const toggleExpand = (cardId) => {
    if (expandedCard === cardId) {
      setExpandedCard(null);
    } else {
      setExpandedCard(cardId);
    }
  };

  // Function to handle vehicle selection
  const handleVehicleSelect = (e) => {
    const selectedVehicleId = e.target.value;
    setSelectedVehicle(selectedVehicleId);
  };

  // Function to handle driver selection
  const handleDriverSelect = (e) => {
    const selectedDriverId = e.target.value;
    setSelectedDriver(selectedDriverId);
  };

  const handleNotApprove = () => {
    setDisabled(true);
  };

  return (
    <>
      {/* Navbar */}
      <Navbar1 isLoggedIn={true} />
      <div className="flex h-screen w-full bg-gray-200">
        <AdminSidebar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="container mx-auto px-6 py-8">
            <div className="grid grid-cols-2 gap-6 mt-8">
              {requests.map((request) => (
                <div
                  key={request._id}
                  className="w-full bg-white rounded-lg shadow-md p-4 flex flex-col items-start"
                >
                  <div className="mb-4">
                    <h4 className="text-gray-700 text-lg font-medium mb-2">
                      {request.requested_by_name}
                    </h4>
                    <p className="text-gray-500 mb-1">
                      PS Number: {request.requested_by_ps}
                    </p>
                    <p className="text-gray-500 mb-1">
                      Contact Number: {request.requested_by_phn}
                    </p>
                    <p className="text-gray-500 mb-1">
                      PickUp Location: {request.pickupLocation}
                    </p>
                    <p className="text-gray-500 mb-1">
                      Drop Location: {request.dropLocation}
                    </p>
                    <p className="text-gray-500 mb-1">
                      Vehicle Allocated: {request.vehicle_model}
                    </p>
                    <p className="text-gray-500 mb-1">
                      Vehicle Number: {request.vehicle_number}
                    </p>
                    <p className="text-gray-500 mb-1">
                      Driver Assigned: {request.driver_name}
                    </p>
                    <p className="text-gray-500 mb-1">
                      Driver Contact: {request.driver_number}
                    </p>
                    <div>
                      <p
                        className={`font-bold mb-2 ${
                          request.req_status ? "text-green-500" : "text-red-500"
                        }`}
                      >
                        {request.req_status ? "Approved" : "Not Approved"}
                      </p>
                      {!request.req_status ? (
                        <div className="flex flex-col space-y-2">
                          <label
                            htmlFor="vehicleSelect"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Vehicle
                          </label>
                          <select
                            id="vehicleSelect"
                            name="vehicleSelect"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                            onChange={handleVehicleSelect}
                            disabled={disabled}
                          >
                            <option value="">Select Vehicle</option>
                            {availableVehicles.map((vehicle) => (
                              <option key={vehicle._id} value={vehicle._id}>
                                {vehicle.model_name}
                              </option>
                            ))}
                          </select>

                          <label
                            htmlFor="driverSelect"
                            className="block text-sm font-medium text-gray-700 mt-2"
                          >
                            Driver
                          </label>
                          <select
                            id="driverSelect"
                            name="driverSelect"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                            onChange={handleDriverSelect}
                            disabled={disabled}
                          >
                            <option value="">Select Driver</option>
                            {availableDrivers.map((driver) => (
                              <option key={driver._id} value={driver._id}>
                                {driver.name}
                              </option>
                            ))}
                          </select>
                          <button
                            className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded mt-2"
                            onClick={() => handleApprove(request._id)}
                          >
                            Approve
                          </button>
                          <button
                            className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded"
                            onClick={handleNotApprove}
                          >
                            Not Approve
                          </button>
                        </div>
                      ) : (
                        ""
                      )}
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

export default RequestApproval;
