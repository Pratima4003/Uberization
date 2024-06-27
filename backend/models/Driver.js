// Driver Schema

const mongoose = require("mongoose");
const { Schema } = mongoose;

const driverSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phno: {
    type: String,
    required: true,
  },
  license: {
    type: String,
    required: true,
  },
  // this field tells whether the driver is available or not
  available: {
    type: Boolean,
    required: true,
  },
});

const Driver = mongoose.model("Driver", driverSchema);
Driver.createIndexes();
module.exports = Driver;
