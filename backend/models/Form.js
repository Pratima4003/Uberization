// Request Form Schema

const mongoose = require("mongoose");
const { Schema } = mongoose;

const formSchema = new Schema({
  // requested by
  name: {
    type: String,
    required: true,
  },
  psno: {
    type: String,
    required: true,
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
  //  pickTime: {
  //    type: String,
  //    default: Date.now,
  //  },
  return: {
    type: Boolean,
    default: false,
    // required: true,
  },
  returnPick: {
    type: String,
    default: "",
    // required: true,
  },
  returnDrop: {
    type: String,
    default: "",
    // required: true,
  },
  haltTime: {
    type: String,
    default: "",
    // required: true,
  },
});

const Form = mongoose.model("Form", formSchema);
Form.createIndexes();
module.exports = Form;
