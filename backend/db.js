// db.js that does connection to the mongodb database
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
uri = process.env.mongoURI;

const connectToMongo = () => {
  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log("Connect to Mongo Successfully");
};
module.exports = connectToMongo;
