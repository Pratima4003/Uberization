// route that displays the driver details to the admin with their availability

const express = require("express");
const findDriverRouter = express.Router();
const Driver = require("../models/Driver");

findDriverRouter.get("/findDriver", async (req, res) => {
  try {
    const drivers = await Driver.find(); // Fetch all drivers from the database
    res.status(200).json(drivers); // Send the drivers as a JSON response
  } catch (err) {
    res.status(500).json({ error: err.message }); // Send an error response if something goes wrong
  }
});

module.exports = findDriverRouter;
