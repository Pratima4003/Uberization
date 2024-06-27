// Vehicle Schema
const mongoose = require("mongoose");
const { Schema } = mongoose;

const vehicleSchema = new Schema({
  model_name: {
    type: String,
    required: true,
  },
  type_of_vehicle: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
    unique: true,
  },
  number_of_seats_except_driver: {
    type: Number,
    required: true,
  },
  // this field tell whether the vehicle is available or not
  available: {
    type: Boolean,
    required: true,
  },
});

const Vehicle = mongoose.model("Vehicle", vehicleSchema);
Vehicle.createIndexes();
module.exports = Vehicle;
