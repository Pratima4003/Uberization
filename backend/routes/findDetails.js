// route that displays the count of details

const express = require("express");
const findDetailsRouter = express.Router();
const Driver = require("../models/Driver");
const Vehicle = require("../models/Vehicle");
const ReqAppr = require("../models/RequestApprove");

findDetailsRouter.get("/findDetails", async (req, res) => {
  try {
    const drivers = await Driver.countDocuments(); // Fetch count of drivers from the database
    const vehicles = await Vehicle.countDocuments(); // Fetch count of vehicles from the database
    const requestsAppr = await ReqAppr.countDocuments(); // Fetch count of requests for approval from the database
    res.status(200).json({
      drivers: drivers,
      vehicles: vehicles,
      requestsForApproval: requestsAppr,
    }); // Send the drivers as a JSON response
  } catch (err) {
    res.status(500).json({ error: err.message }); // Send an error response if something goes wrong
  }
});

module.exports = findDetailsRouter;
