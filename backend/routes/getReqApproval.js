// route that displays the requests that are pending for approval with their status

const express = require("express");
const getReqApprovalRouter = express.Router();
const ReqAppr = require("../models/RequestApprove");

getReqApprovalRouter.get("/findRequests", async (req, res) => {
  try {
    const reqApps = await ReqAppr.find(); // Fetch all requests for approval from the database
    res.status(200).json(reqApps); // Send them as a JSON response
  } catch (err) {
    res.status(500).json({ error: err.message }); // Send an error response if something goes wrong
  }
});

module.exports = getReqApprovalRouter;
