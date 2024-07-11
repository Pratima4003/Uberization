// routes/requestRoutes.js
const express = require("express");
const updateCompletedRequestRouter = express.Router();
const Vehicle = require("../models/Vehicle");
const Driver = require("../models/Driver");
const Request = require("../models/RequestApprove");

// PUT /updateRequest/:id
updateCompletedRequestRouter.put(
  "/updateCompletedRequest/:id",
  async (req, res) => {
    const { id } = req.params;
    const completed = req.body.completed;
    const vehicle_name = req.body.vehicle;
    const driver_name = req.body.driver;

    console.log(req.body);
    try {
      // Update request status and assigned vehicle/driver
      const request = await Request.findById(id);
      if (!request) {
        return res.status(404).json({ message: "Request not found" });
      }

      request.completed = true;

      // Save the updated request
      await request.save();

      console.log(vehicle_name);
      const vehicle = await Vehicle.findOne({ model_name: vehicle_name });
      console.log(vehicle);
      const driver = await Driver.findOne({ name: driver_name });

      // Set vehicle and driver availability based on request completion status
      if (completed) {
        vehicle.available = true;
        driver.available = true;
      } else {
        vehicle.available = false;
        driver.available = false;
      }

      console.log(driver.available);
      // Save the updated vehicle and driver
      await vehicle.save();
      await driver.save();

      res.status(200).json({ message: "Request updated successfully" });
    } catch (error) {
      console.error("Error updating request:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

module.exports = updateCompletedRequestRouter;
