// authenticate.js
// const basicAuth = require("basic-auth");
const User = require("../models/User");

const authenticate = async (req, res, next) => {
  const credentials = req.body;
console.log(credentials);
  if (!credentials) {
    return res.status(401).json({ message: "Access denied" });
  }
console.log(typeof credentials.username);

  if (credentials.username == "admin" && credentials.password == "123") {
    req.isAdmin = true;
    return next();
  }

  User.findOne({ name: credentials.username, password: credentials.password })
    .then(user => {
        if (user) {
            req.isAdmin = false;
            req.isNormal = true;
            next();
        } else {
            console.log("error here");
            res.status(401).json({ message: "Access denied" });
        }
    })
    .catch(err => {
        res.status(500).json({ message: "Internal server error" });
    });

};

module.exports = authenticate;
