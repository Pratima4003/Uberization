// Request Approval Route

const express = require("express");
const { body, validationResult } = require("express-validator");
const RequestApproval = require("../models/RequestApprove");
const requestApprovalRouter = express.Router();

requestApprovalRouter.post("/newReqAppr", (req, res) => {
  const data = req.body;
  console.log(data);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log("error here");
    return res.status(400).json({ errors: errors.array() });
  }
  RequestApproval.create({
    requested_by_name: data.name,
    requested_by_ps: data.psno,
    requested_by_phn: data.phno,
    pickupLocation: data.pickLocation,
    dropLocation: data.dropLocation,
  })
    .then((RequestApproval) => res.json(RequestApproval))
    .catch((err) => console.log(err));
});

module.exports = requestApprovalRouter;
