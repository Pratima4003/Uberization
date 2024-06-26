// Request Form Schema

const mongoose = require("mongoose");
const { Schema } = mongoose;

const formSchema = new Schema({
  // requested by
  name: {
    type: String,
    required: true,
    // unique: true,
  },
  psno: {
    type: String,
    required: true,
    // unique: true,
  },
  phno: {
    type: String,
    required: true,
  },
  pickLocation: {
    type: String,
    required: true,
  },
  dropLocation: {
    type: String,
    required: true,
  },
  //   pickDate: {
  //     type: Date,
  //     default: Date.now,
  //   },
  //   pickTime: {
  //     type: String,
  //     default: Date.now,
  //   },
});

const Form = mongoose.model("Form", formSchema);
Form.createIndexes();
module.exports = Form;
