// Request Approval Schema
const mongoose = require("mongoose");
const { Schema } = mongoose;

const requestapprovalSchema = new Schema({
  requested_by_name: {
    type: String,
    required: true,
  },
  requested_by_ps: {
    type: String,
    required: true,
  },
  requested_by_phn: {
    type: String,
    required: true,
  },
  pickupLocation: {
    type: String,
    required: true,
  },
  dropLocation: {
    type: String,
    required: true,
  },
  vehicle_model: {
    type: String,
    default: " ",
    required: true,
  },
  vehicle_number: {
    type: String,
    default: " ",
    required: true,
  },
  driver_name: {
    type: String,
    default: " ",
    required: true,
  },
  driver_number: {
    type: String,
    default: " ",
    required: true,
  },
  //   this field tells whether the request is approved or not
  req_status: {
    type: Boolean,
    default: false,
    required: true,
  },
});

const RequestApproval = mongoose.model(
  "RequestApproval",
  requestapprovalSchema
);
RequestApproval.createIndexes();
module.exports = RequestApproval;
