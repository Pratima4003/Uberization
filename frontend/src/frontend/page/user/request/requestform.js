import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Sidebar from "../../../components/sidebar/sidebar";
import Navbar1 from "../../../components/header/navbar1";
import useData from "../../../components/useData/useData";

// initialize the modal app
Modal.setAppElement("#root");

const RequestForm = () => {
  const { getUserData } = useData(); // Destructure getUserData from the custom hook
  const uD = getUserData();

  const [formData, setFormData] = useState({
    name: uD.name,
    psno: uD.psno,
    phno: "",
    dropLocation: "",
    pickLocation: "",
    destinationType: "instation",
    fromDate: "",
    toDate: "",
    pickupTime: "",
    dropTime: "",
    halt: "",
    returnFlag: false,
    returnPick: "",
    returnDrop: "",
  });

  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (!showAdditionalFields) {
      setFormData({
        ...formData,
        [name]: value,
      });
    } else {
      setFormData({
        ...formData,
        returnPick: value,
      });
      setFormData({
        ...formData,
        returnDrop: value,
      });
      // For other details, update normally
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleCheckboxChange = (e) => {
    setFormData({
      ...formData,
      returnFlag: true,
    });
    setShowAdditionalFields(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const jsonData = JSON.stringify(formData);
    console.log(formData.returnFlag);
    console.log(formData);
    const apiEndpoints = [
      "http://localhost:3000/newform",
      "http://localhost:3000/newReqAppr",
    ];

    try {
      const requests = apiEndpoints.map((endpoint) =>
        fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: jsonData,
        })
      );

      const responses = await Promise.all(requests);

      if (responses.every((response) => response.status === 200)) {
        setModalMessage("Request Sent Successfully!");
      } else {
        setModalMessage(
          "Request Not Sent. Please Refill Form with valid inputs"
        );
      }
      setModalIsOpen(true);
    } catch (error) {
      setModalMessage("Request Failed. Please check your Data and try again.");
      setModalIsOpen(true);
    }
  };

  return (
    <>
      <div className="sticky-nvabar">
        {/* Navbar */}
        <Navbar1 isLoggedIn={true} />
      </div>
      <div className="flex h-auto bg-purple-200">
        {/* Sidebar */}
        <Sidebar />
        <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
          <h2 className="text-5xl text-center mb-8 font-BonaNovaSC">
            Request Form
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 font-Roboto"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                disabled="disabled"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label
                  htmlFor="psno"
                  className="block text-sm font-medium text-gray-700 font-Roboto"
                >
                  PS Number
                </label>
                <input
                  type="text"
                  id="psno"
                  name="psno"
                  disabled="disabled"
                  value={formData.psno}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phno"
                  className="block text-sm font-medium text-gray-700 font-Roboto"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phno"
                  name="phno"
                  value={formData.phno}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            {/* <div className="mb-4">
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
            </div> */}

            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label
                  htmlFor="pickLocation"
                  className="block text-sm font-medium text-gray-700 font-Roboto"
                >
                  Pickup Location
                </label>
                <input
                  type="text"
                  id="pickLocation"
                  name="pickLocation"
                  value={formData.pickLocation}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="dropLocation"
                  className="block text-sm font-medium text-gray-700 font-Roboto"
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
                  className="block text-sm font-medium text-gray-700 font-Roboto"
                >
                  Required From
                </label>
                <input
                  type="date"
                  id="fromDate"
                  name="fromDate"
                  disabled="disabled"
                  value={formData.fromDate}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="toDate"
                  className="block text-sm font-medium text-gray-700 font-Roboto"
                >
                  Required To
                </label>
                <input
                  type="date"
                  id="toDate"
                  name="toDate"
                  disabled="disabled"
                  value={formData.toDate}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="pickupTime"
                  className="block text-sm font-medium text-gray-700 font-Roboto"
                >
                  Pickup Time
                </label>
                <input
                  type="time"
                  id="pickupTime"
                  name="pickupTime"
                  disabled="disabled"
                  value={formData.pickupTime}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="pickupTime"
                  className="block text-sm font-medium text-gray-700 font-Roboto"
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
                <span className="text-sm font-medium text-gray-700 font-Roboto">
                  Return
                </span>
              </label>
            </div>

            {showAdditionalFields && (
              <div className="grid grid-cols-1 gap-4">
                <div className="mb-4">
                  <label
                    htmlFor="additionalField1"
                    className="block text-sm font-medium text-gray-700 font-Roboto"
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
                    htmlFor="additionalField1"
                    className="block text-sm font-medium text-gray-700 font-Roboto"
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
                    htmlFor="additionalField1"
                    className="block text-sm font-medium text-gray-700 font-Roboto"
                  >
                    Drop Location
                  </label>
                  <input
                    type="text"
                    id="drop"
                    name="drop"
                    value={formData.pickLocation}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
            )}

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-700 hover:bg-blue-900 text-white font-semibold font-BonaNovaSC py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300"
              >
                Request
              </button>
            </div>
          </form>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Request Status"
        className="fixed inset-0 flex items-center justify-center z-50 outline-none focus:outline-none"
        overlayClassName="fixed inset-0 bg-gray-900 bg-opacity-50"
      >
        <div className="bg-white rounded-lg shadow-lg p-6 w-1/3 mx-auto">
          <h2 className="text-xl font-semibold mb-4">{modalMessage}</h2>
          <button
            onClick={() => setModalIsOpen(false)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Close
          </button>
        </div>
      </Modal>
    </>
  );
};

export default RequestForm;
