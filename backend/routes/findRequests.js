// route that displays the requests that are a particular user has sent

const express = require("express");
const getUserRequestsRouter = express.Router();
const ReqAppr = require("../models/RequestApprove");

getUserRequestsRouter.get("/findUserRequests", async (req, res) => {
  console.log(req.query);
  const { psno } = req.query; // Assuming username is passed as a query parameter
  console.log("here");

  try {
    const customReq = await ReqAppr.find({ requested_by_ps: psno });
    console.log(customReq);

    if (!customReq) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({message: "hello", customUserRequest:customReq}); // Return the found user object
  } catch (error) {
    console.error("Error finding user:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = getUserRequestsRouter;
