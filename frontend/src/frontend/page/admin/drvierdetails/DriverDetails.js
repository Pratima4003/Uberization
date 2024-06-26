import React from "react";
import AdminSidebar from "../../../components/sidebar/AdminSidebar";
import { useNavigate } from "react-router-dom";
import Navbar1 from "../../../components/header/navbar1";

function DriverDetails() {
  const history = useNavigate();
  const requested = () => {
    history("#");
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
                    src="https://cdn-icons-png.freepik.com/256/1077/1077114.png?semt=ais_hybrid"
                    className="object-cover w-full h-full"
                    alt="Driver1"
                  />
                </div>
                <div>
                  <h4 className="text-gray-700 text-lg font-medium mb-2">
                    Driver 1
                  </h4>
                  <p className="text-gray-500 mb-2">Name: D1</p>
                  <p className="text-gray-500 mb-2">Contact Number: 123</p>
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
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded"
                      onClick={requested}
                    >
                      Cannot Approve
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full bg-white rounded-lg shadow-md p-4 flex items-center">
                <div className="relative w-39 h-32 overflow-hidden rounded-lg mr-4">
                  <img
                    src="https://cdn-icons-png.freepik.com/256/1077/1077114.png?semt=ais_hybrid"
                    className="object-cover w-full h-full"
                    alt="Driver2"
                  />
                </div>
                <div>
                  <h4 className="text-gray-700 text-lg font-medium mb-2">
                    Driver 2
                  </h4>
                  <p className="text-gray-500 mb-2">Name: D2</p>
                  <p className="text-gray-500 mb-2">Driver Number: 456</p>
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
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded"
                      onClick={requested}
                    >
                      Cannot Approve
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

export default DriverDetails;
