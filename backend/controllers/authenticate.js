// authenticate.js

const User = require("../models/User");
const basicAuth = require("basic-auth");

const authenticate = async (req, res, next) => {
  const credentials = req.body;

  // for thunderclient verification
  // const credentials = basicAuth(req);
  console.log(credentials);
  if (!credentials) {
    return res.status(401).json({ message: "Access denied" });
  }

  await User.findOne({
    name: credentials.username,
    password: credentials.password,
  })
    .then((user) => {
      if (user) {
        if (user.isadmin === true) {
          req.isAdmin = true;
          req.customData = { user };
          return next();
        } else {
          req.isAdmin = false;
          req.isNormal = true;
          req.customData = { user };
          next();
        }
      } else {
        res.status(401).json({ message: "Access denied" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Internal server error" });
    });
};

module.exports = authenticate;
