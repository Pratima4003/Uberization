// from C:\Users\ISD\Desktop\reactapp\newapp\frontend\src\frontend\page\admin\approverequests\RequestsApproval.js
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