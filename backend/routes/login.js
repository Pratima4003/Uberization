// login route

const express = require("express");
const loginRouter = express.Router();
const authenticate = require("../controllers/authenticate");

loginRouter.post("/login", authenticate, (req, res) => {
  if (req.isAdmin) {
    res.status(200).json({ message: "Admin", user: req.customData });
  } else if (!req.isAdmin && req.isNormal) {
    res.status(201).json({ message: "Normal", user: req.customData });
  } else {
    res.status(403).send({ message: "Invalid User" });
  }
});

module.exports = loginRouter;
