// New User Creation Route

const express = require("express");
const { body, validationResult } = require("express-validator");
const User = require("../models/User");
const newUserRouter = express.Router();

newUserRouter.get(
  "/newuser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("psno", "Enter a valid PS Number").isLength({ min: 9 }),
    body("phno", "Enter a valid Phone Number").isLength({ min: 10, max:10 }),
    body("password", "Enter correct password").isLength({ min: 4 }),
    body("isadmin", "enter true for admin").isBoolean(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.create({
      name: req.body.name,
      psno: req.body.psno,
      phno: req.body.phno,
      email: req.body.email,
      password: req.body.password,
      isadmin: req.body.isadmin,
    })
      .then((user) => res.json(user))
      .catch((err) => console.log(err));
  }
);

module.exports = newUserRouter;
