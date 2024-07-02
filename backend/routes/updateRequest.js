// routes/requestRoutes.js
const express = require("express");
const updateRequestRouter = express.Router();
const Vehicle = require("../models/Vehicle");
const Driver = require("../models/Driver");
const Request = require("../models/RequestApprove");

// PUT /updateRequest/:id
updateRequestRouter.put("/updateRequest/:id", async (req, res) => {
  const { id } = req.params;
  const vehicleId = req.body.vehicleId;
  const driverId = req.body.driverId;

  try {
    // Update request status and assigned vehicle/driver
    const request = await Request.findById(id);
    if (!request) {
      return res.status(404).json({ message: "Request not found" });
    }

    // Update request with vehicle and driver info
    const vehicle = await Vehicle.findById(vehicleId);
    const driver = await Driver.findById(driverId);

    if (!vehicle || !driver) {
      return res.status(404).json({ message: "Vehicle or Driver not found" });
    }

    request.vehicle_model = vehicle.model_name;
    request.vehicle_number = vehicle.number;
    request.driver_name = driver.name;
    request.driver_number = driver.phno;
    request.req_status = true;

    // Save the updated request
    await request.save();

    // Set vehicle and driver availability to false
    vehicle.available = false;
    driver.available = false;

    // Save the updated vehicle and driver
    await vehicle.save();
    await driver.save();

    res.status(200).json({ message: "Request updated successfully" });
  } catch (error) {
    console.error("Error updating request:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = updateRequestRouter;
