// New Vehicle Creation Route

const express = require("express");
const { body, validationResult } = require("express-validator");
const Vehicle = require("../models/Vehicle");
const newVehicleRouter = express.Router();

newVehicleRouter.post(
  "/newvehicle",
  // [
  //   body("model_name", "Enter a valid model name").isLength({ min: 2 }),
  //   body("type_of_vehicle", "Enter a valid type").isLength({ min: 2 }),
  //   body("number", "Enter valid number").isLength({ min: 4 }),
  //   body(
  //     "number_of_seats_except_driver",
  //     "Enter exact number of seats available except the driver"
  //   ).isNumeric(),
  //   body("available", "Enter whether the vehicle is available").isBoolean(),
  // ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    Vehicle.create({
      model_name: req.body.model_name,
      type_of_vehicle: req.body.type_of_vehicle,
      number: req.body.number,
      number_of_seats_except_driver: req.body.number_of_seats_except_driver,
      available: req.body.available,
    })
      .then((vehicle) => res.json(vehicle))
      .catch((err) => console.log(err));
  }
);

module.exports = newVehicleRouter;
