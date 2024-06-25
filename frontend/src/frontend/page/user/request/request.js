import React from "react";
import Sidebar from "../../../components/sidebar/sidebar";
import Navbar1 from "../../../components/header/navbar1";

function Request() {
  return (
    <>
      {/* Navbar */}
      <Navbar1 isLoggedIn={true} />
      <div className="flex h-auto bg-gray-200">
        <Sidebar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="container mx-auto px-6 py-8">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-1 gap-6 mt-8">
              <div className="w-full bg-white rounded-lg shadow-md p-4 flex items-center">
                <div>
                  <h4 className="text-gray-700 text-lg font-medium mb-2">
                    Request 1
                  </h4>
                  <p className="text-gray-500 mb-2">Vehicle Allocated: XYZ</p>
                  <p className="text-gray-500 mb-2">Driver Assigned: PQR</p>
                  <p className="text-gray-500 mb-2">Number Plate: ABC-1234</p>
                  <p className="text-gray-500 mb-2">
                    Number of people that can be seated except driver
                  </p>
                  <p className="text-gray-500 mb-2">
                    Pickup Location: (taken from form data)
                  </p>
                  <p className="text-gray-500 mb-2">
                    Drop Location: (taken from form data)
                  </p>
                  <div className="flex space-x-4">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded"
                      onClick={console.log("requested")}
                    >
                      Pending
                    </button>
                    {/* form visible till the drop time field is filled */}
                  </div>
                </div>
              </div>

              <div className="w-full bg-white rounded-lg shadow-md p-4 flex items-center">
                <div>
                  <h4 className="text-gray-700 text-lg font-medium mb-2">
                    Request 2
                  </h4>
                  <p className="text-gray-500 mb-2">Vehicle Allocated: ABC</p>
                  <p className="text-gray-500 mb-2">Driver Assigned: DEF</p>
                  <p className="text-gray-500 mb-2">Number Plate: ABC-1234</p>
                  <p className="text-gray-500 mb-2">
                    Number of people that can be seated except driver
                  </p>
                  <p className="text-gray-500 mb-2">
                    Pickup Location: (taken from form data)
                  </p>
                  <p className="text-gray-500 mb-2">
                    Drop Location: (taken from form data)
                  </p>
                  <div className="flex space-x-4">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded"
                      onClick={console.log("requested")}
                    >
                      Pending
                    </button>
                    {/* form details visible till the drop time field is filled */}
                    {/* when pending clicked, form should reopen, autofill the data from the database except for the drop time field (which would be enabled) */}
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

export default Request;
