const express = require("express");
const bodyParser = require("body-parser");
const connectToMongo = require("./db");
const dotenv = require("dotenv");
const authenticate = require("../backend/controllers/authenticate");
dotenv.config();

const app = express();
connectToMongo();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(express.json());

app.get(port, (req, res) => {
  res.send("Hello");
});

// routes
app.use("/api/newuser", require("./routes/newUser"));
app.use("/api/newform", require("./routes/newForm"));

// login route
app.get("/login", authenticate, (req, res) => {
  if (req.isAdmin === true) {
    res.send("Admin");
  } else if (!req.isAdmin && req.isNormal) {
    res.send("Normal");
  } else {
    res.status(403).json({ message: "Invalid User" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
