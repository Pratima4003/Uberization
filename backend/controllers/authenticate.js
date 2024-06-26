// authenticate.js
const basicAuth = require("basic-auth");
const User = require("../models/User");

const authenticate = async (req, res, next) => {
  const credentials = basicAuth(req);

  if (!credentials) {
    return res.status(401).json({ message: "Access denied" });
  }

  const { name, pass } = credentials;

  if (name === "admin" && pass === "123") {
    req.isAdmin = true;
    return next();
  }

  try {
    const user = await User.findOne({ name: name, password: pass });
    
    if (user) {
      req.isAdmin = false;
      req.isNormal = true;
      next();
    } else {
      res.status(401).json({ message: "Access denied" });
    }
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = authenticate;
