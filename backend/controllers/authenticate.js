// authenticate.js
const basicAuth = require("basic-auth");
// database is the file from models
const User = require("../models/User");

const authenticate = (req, res, next) => {
  const credentials = basicAuth(req);

  if (!credentials) {
    return res.status(401).json({ message: "Access denied" });
  }

  const { name, pass } = credentials;
  if (name === "admin" && pass === "123") {
    req.isAdmin = true;
    next();
  }
  User.findOne({ username: name, password: pass }, (err, user) => {
    if (err) {
      return res.status(500).json({ message: "Internal server error" });
    }

    if (user) {
      req.isAdmin = false;
      req.isNormal = true;
      next();
    } else {
      res.status(401).json({ message: "Access denied" });
    }
  });
};

module.exports = authenticate;
