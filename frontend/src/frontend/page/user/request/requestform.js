import React, { useState } from "react";
import Sidebar from "../../../components/sidebar/sidebar";
import Navbar1 from "../../../components/header/navbar1";

const RequestForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    psNumber: "",
    phoneNumber: "",
    dropLocation: "",
    destinationType: "instation",
    fromDate: "",
    toDate: "",
    pickupTime: "",
    dropTime: "",
    pickupLocation: "",
    halt: "",
  });

  const [showAdditionalFields, setShowAdditionalFields] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (!showAdditionalFields) {
      // If additional fields are not shown, update normally
      setFormData({
        ...formData,
        [name]: value,
      });
    } else {
      // If additional fields are shown, handle swap and autofill logic
      if (name === "pickupLocation") {
        // Update main pickupLocation and autofill additionalField2 (Drop Location)
        setFormData({
          ...formData,
          pickupLocation: value,
          drop: value,
        });
      } else if (name === "destinationName") {
        // Update main destinationName and autofill additionalField1 (Pickup Location)
        setFormData({
          ...formData,
          dropLocation: value,
          pickup: value,
        });
      } else {
        // For other fields, update normally
        setFormData({
          ...formData,
          [name]: value,
        });
      }
    }
  };

  const handleCheckboxChange = (e) => {
    setShowAdditionalFields(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // For demonstration, log form data to console
    // Reset form after submission (if needed)
    // setFormData({
    //   name: '',
    //   psNumber: '',
    //   phoneNumber: '',
    //   destinationName: '',
    //   destinationType: 'instation',
    //   fromDate: '',
    //   toDate: '',
    //   pickupTime: '',
    //   pickupLocation: '',
    // });
    // Reset checkbox state
    setShowAdditionalFields(false);
  };

  return (
    <>
      {/* Navbar */}
      <Navbar1 isLoggedIn={true} />
      <div className="flex bg-gray-200">
        {/* Sidebar */}
        <Sidebar />
        <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
          <h2 className="text-4xl font-semibold text-center mb-6 font-sans">
            Request Form
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label
                  htmlFor="psNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  PS Number
                </label>
                <input
                  type="text"
                  id="psNumber"
                  name="psNumber"
                  value={formData.psNumber}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="destinationType"
                className="block text-sm font-medium text-gray-700"
              >
                Travel Type
              </label>
              <select
                id="destinationType"
                name="destinationType"
                value={formData.destinationType}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                required
              >
                <option value="instation">InStation</option>
                <option value="outstation">OutStation</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label
                  htmlFor="pickupLocation"
                  className="block text-sm font-medium text-gray-700"
                >
                  Pickup Location
                </label>
                <input
                  type="text"
                  id="pickupLocation"
                  name="pickupLocation"
                  value={formData.pickupLocation}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="dropLocation"
                  className="block text-sm font-medium text-gray-700"
                >
                  Drop Location
                </label>
                <input
                  type="text"
                  id="dropLocation"
                  name="dropLocation"
                  value={formData.dropLocation}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="fromDate"
                  className="block text-sm font-medium text-gray-700"
                >
                  Required From
                </label>
                <input
                  type="date"
                  id="fromDate"
                  name="fromDate"
                  value={formData.fromDate}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="toDate"
                  className="block text-sm font-medium text-gray-700"
                >
                  Required To
                </label>
                <input
                  type="date"
                  id="toDate"
                  name="toDate"
                  value={formData.toDate}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="pickupTime"
                  className="block text-sm font-medium text-gray-700"
                >
                  Pickup Time
                </label>
                <input
                  type="time"
                  id="pickupTime"
                  name="pickupTime"
                  value={formData.pickupTime}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="pickupTime"
                  className="block text-sm font-medium text-gray-700"
                >
                  Drop Time
                </label>
                <input
                  type="time"
                  id="pickupTime"
                  name="pickupTime"
                  disabled="disabled"
                  value={formData.dropTime}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="additionalFields" className="flex items-center">
                <input
                  type="checkbox"
                  id="additionalFields"
                  name="additionalFields"
                  checked={showAdditionalFields}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                <span className="text-sm font-medium text-gray-700">
                  Return
                </span>
              </label>
            </div>
            {showAdditionalFields && (
              <div className="grid grid-cols-1 gap-4">
                <div className="mb-4">
                  <label
                    htmlFor="additionalField1"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Halt Time
                  </label>
                  <input
                    type="text"
                    id="halt"
                    name="halt"
                    value={formData.halt}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="pickup"
                    className="block text-sm font-medium text-gray-700"
                  >
                    PickUp Location
                  </label>
                  <input
                    type="text"
                    id="pickup"
                    name="pickup"
                    value={formData.dropLocation}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="drop"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Drop Location
                  </label>
                  <input
                    type="text"
                    id="drop"
                    name="drop"
                    value={formData.pickupLocation}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
            )}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300"
                onClick={console.log("requested")}
              >
                Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RequestForm;
