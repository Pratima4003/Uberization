// New Driver Creation Route

const express = require("express");
const { body, validationResult } = require("express-validator");
const Driver = require("../models/Driver");
const driverRouter = express.Router();

driverRouter.post(
  "/newdriver",
  // [
  //   body("name", "Enter a valid name").isLength({ min: 3 }),
  //   body("phno", "Enter a valid phone number").isLength({min:10, max:10}),
  //   body("license", "Enter valid license number").isLength({ min: 4 }),
  //   body("available", "Enter whether available or not").isBoolean(),
  // ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    Driver.create({
      name: req.body.name,
      phno: req.body.phno,
      license: req.body.license,
      available: req.body.available,
    })
      .then((driver) => res.json(driver))
      .catch((err) => console.log(err));
  }
);

module.exports = driverRouter;
