import React from "react";
import AdminSidebar from "../../../components/sidebar/AdminSidebar";
import { useNavigate } from "react-router-dom";
import Navbar1 from "../../../components/header/navbar1";

function VehicleDetails() {
  const history = useNavigate();
  const requested = () => {
    history("/request");
  };
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
              <div className="w-full bg-white rounded-lg shadow-md p-4 flex items-center">
                <div className="relative w-39 h-32 overflow-hidden rounded-lg mr-4">
                  <img
                    src="https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/130961/grand-vitara-right-front-three-quarter-3.jpeg?isig=0&q=80"
                    className="object-cover w-full h-full"
                    alt="Vehicle"
                  />
                </div>
                <div>
                  <h4 className="text-gray-700 text-lg font-medium mb-2">
                    Vehicle 1
                  </h4>
                  <p className="text-gray-500 mb-2">Model: XYZ123</p>
                  <p className="text-gray-500 mb-2">Number Plate: ABC-1234</p>
                  <p className="text-gray-500 mb-2">
                    Number of people that can be seated except driver
                  </p>
                  <div className="flex space-x-4">
                    <h3 className="text-red-500 font-bold mb-2">
                      Availability
                    </h3>
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded"
                    //   onClick={requested}
                    >
                      Approve
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full bg-white rounded-lg shadow-md p-4 flex items-center">
                <div className="relative w-39 h-32 overflow-hidden rounded-lg mr-4">
                  <img
                    src="https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/130961/grand-vitara-right-front-three-quarter-3.jpeg?isig=0&q=80"
                    className="object-cover w-full h-full"
                    alt="Vehicle"
                  />
                </div>
                <div>
                  <h4 className="text-gray-700 text-lg font-medium mb-2">
                    Vehicle 2
                  </h4>
                  <p className="text-gray-500 mb-2">Model: XYZ123</p>
                  <p className="text-gray-500 mb-2">Number Plate: ABC-1234</p>
                  <p className="text-gray-500 mb-2">
                    Number of people that can be seated except driver
                  </p>
                  <div className="flex space-x-4">
                    <h3 className="text-red-500 font-bold mb-2">
                      Availability
                    </h3>
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded"
                      onClick={requested}
                    >
                      Approve
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default VehicleDetails;
