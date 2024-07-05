const express = require("express");
const bodyParser = require("body-parser");
const connectToMongo = require("./db");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

// express app
const app = express();
connectToMongo();
const port = process.env.PORT || 3000;

// middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.get(port, (req, res) => {
  res.send("Hello");
});

// definition of routes
const loginRouter = require("./routes/login");
const newUserRouter = require("./routes/newUser");
const formRouter = require("./routes/newForm");
// const findUserRouter = require("./routes/findUser");
const driverRouter = require("./routes/newDriver");
const newVehicleRouter = require("./routes/newVehicle");
const findVehicleRouter = require("./routes/findVehicle");
const findDriverRouter = require("./routes/findDriver");
const requestApprovalRouter = require("./routes/requestApproval");
const getReqApprovalRouter = require("./routes/getReqApproval");
const getUserRequestsRouter = require("./routes/findRequests");
const updateRequestRouter = require("./routes/updateRequest");

// routes
app.use(loginRouter);
app.use(newUserRouter);
app.use(formRouter);
// app.use(findUserRouter);
app.use(driverRouter);
app.use(newVehicleRouter);
app.use(findVehicleRouter);
app.use(findDriverRouter);
app.use(requestApprovalRouter);
app.use(getReqApprovalRouter);
app.use(getUserRequestsRouter);
app.use(updateRequestRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});