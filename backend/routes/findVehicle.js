// route that displays the vehicle details to the admin with their availability

const express = require("express");
const findVehicle = express.Router();
const Vehicle = require("../models/Vehicle");

findVehicle.get("/findVehicle", async (req, res) => {
  try {
    const vehicles = await Vehicle.find(); // Fetch all vehicles from the database
    res.status(200).json(vehicles); // Send the vehicles as a JSON response
  } catch (err) {
    res.status(500).json({ error: err.message }); // Send an error response if something goes wrong
  }
});

module.exports = findVehicle;
