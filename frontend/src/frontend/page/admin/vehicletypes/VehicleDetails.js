// displays the information of all vehicles

import React, { useState, useEffect } from "react";
import AdminSidebar from "../../../components/sidebar/AdminSidebar";
import { useNavigate } from "react-router-dom";
import Navbar1 from "../../../components/header/navbar1";

function VehicleDetails() {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await fetch("http://localhost:3000/findVehicle");
        if (!response.ok) {
          throw new Error("Failed to fetch vehicles");
        }
        const data = await response.json();
        setVehicles(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVehicles();
  }, []);

  const handleApprove = (vehicleId) => {
    navigate(`/request/${vehicleId}`);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      {/* Navbar */}
      <Navbar1 isLoggedIn={true} />
      <div className="flex h-screen bg-gray-200">
        <AdminSidebar />
        {/* Main Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="container mx-auto px-6 py-8">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-1 gap-6 mt-8">
              {vehicles.map((vehicle) => (
                <div
                  key={vehicle._id}
                  className="w-full bg-white rounded-lg shadow-md p-4 flex items-center"
                >
                  <div className="relative w-39 h-32 overflow-hidden rounded-lg mr-4">
                    <img
                      // src={vehicle.imageUrl}
                      src="https://img.freepik.com/free-vector/modern-urban-adventure-suv-vehicle-illustration_1344-200.jpg?uid=R96791781&ga=GA1.1.2082991712.1718443786&semt=sph"
                      className="object-cover w-full h-full"
                      alt="Vehicle"
                    />
                  </div>
                  <div>
                    <h4 className="text-gray-700 text-lg font-medium mb-2">
                      {vehicle.model_name}
                    </h4>
                    <p className="text-gray-500 mb-2">
                      Model: {vehicle.model_name}
                    </p>
                    <p className="text-gray-500 mb-2">
                      Number: {vehicle.number}
                    </p>
                    <p className="text-gray-500 mb-2">
                      Number of seats except driver:{" "}
                      {vehicle.number_of_seats_except_driver}
                    </p>
                    <p
                      className={`font-bold mb-2 ${
                        vehicle.available ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {vehicle.available ? "Available" : "Not Available"}
                    </p>
                    {/* <div className="flex space-x-4">
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded"
                        onClick={() => handleApprove(vehicle._id)}
                      >
                        Approve
                      </button>
                    </div> */}
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

export default VehicleDetails;
