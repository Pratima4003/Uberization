// New Request Form Creation Route

const express = require("express");
const { body, validationResult } = require("express-validator");
const Form = require("../models/Form");
const formRouter = express.Router();

formRouter.post(
  "/newform",
  // [
  // body("name", "Enter valid Name").isLength({ min: 3 }),
  // body("psno", "Enter valid PS Number").isLength({ min: 9 }),
  // body("phno", "Enter valid Phone Number").isLength({ min: 10 }),
  // body("pickLocation", "Enter correct and valid PickUp Location").isLength({
  //   min: 2,
  // }),
  // body("dropLocation", "Enter correct and valid DropUp Location").isLength({
  //   min: 2,
  // }),
  // body("returnPick", "Enter correct and valid return Pick Location").isLength({
  //   min: 0,
  // }),
  // body("returnDrop", "Enter correct and valid return Drop Location").isLength({
  //   min: 0,
  // }),
  // body("return", "Enter valid input for return").isBoolean({default:false}),
  //   // body("pickDate", "Enter valid Date").isDate(),
  //   // body("pickTime", "Enter valid Time").isTime(),
  // ],
  (req, res) => {
    const data = req.body;
    console.log(data);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log("error here");
      return res.status(400).json({ errors: errors.array() });
    }
    Form.create({
      name: data.name,
      psno: data.psno,
      phno: data.phno,
      pickLocation: data.pickLocation,
      dropLocation: data.dropLocation,
      returnPick: data.returnPick,
      returnDrop: data.returnDrop,
      return: data.returnFlag,
      // pickDate: data.pickDate,
      // pickTime: data.pickTime,
    })
      .then((form) => res.json(form))
      .catch((err) => console.log(err));
  }
);

module.exports = formRouter;
