// Request Approval Route

const express = require("express");
const { body, validationResult } = require("express-validator");
const RequestApproval = require("../models/RequestApprove");
const requestApprovalRouter = express.Router();

requestApprovalRouter.post(
  "/newform",
  [
    body("name", "Enter valid Name").isLength({ min: 3 }),
    body("psno", "Enter valid PS Number").isLength({ min: 9 }),
    body("phno", "Enter valid Phone Number").isLength({ min: 10 }),
    body("vehicle_name", "Enter valid Vehicle Name").isLength({ min: 2 }),
    body("vehicle_number", "Enter valid Vehicle Number").isLength({ min: 3 }),
    body("driver_name", "Enter valid Driver Name").isLength({ min: 3 }),
    body("driver_number", "Enter valid Driver Number").isLength({ min: 5 }),
  ],
  (req, res) => {
    const data = req.body;
    console.log(data);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log("error here");
      return res.status(400).json({ errors: errors.array() });
    }
    RequestApproval.create({
      name: data.name,
      psno: data.psno,
      phno: data.phno,
    })
      .then((RequestApproval) => res.json(RequestApproval))
      .catch((err) => console.log(err));
  }
);

module.exports = requestApprovalRouter;
