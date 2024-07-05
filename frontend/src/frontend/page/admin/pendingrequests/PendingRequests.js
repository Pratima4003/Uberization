// this page gives details of requests that are appoved but the user hasnt yet left the vehicle

import React, { useState } from "react";
import AdminSidebar from "../../../components/sidebar/AdminSidebar";
import Navbar1 from "../../../components/header/navbar1";

function PendingRequests() {
  return (
    <>
      <div className="sticky-navbar">
        {/* Navbar */}
        <Navbar1 isLoggedIn={true} />
      </div>
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
                  <p className="text-gray-500 mb-2">Vehicle Allocated</p>
                  <p className="text-gray-500 mb-2">Driver Assigned</p>
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
                  <p className="text-gray-500 mb-2">Vehicle Allocated</p>
                  <p className="text-gray-500 mb-2">Driver Assigned</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default PendingRequests;
