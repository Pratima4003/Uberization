const express = require("express");
const findUser = express.Router();
const User = require("../models/User");

findUser.get("/findUser", async (req, res) => {
    console.log(req.query);
  const { username } = req.query; // Assuming username is passed as a query parameter

  try {
    const user = await User.findOne({ name: username });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user); // Return the found user object
  } catch (error) {
    console.error("Error finding user:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = findUser;
