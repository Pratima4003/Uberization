const express = require("express");
const bodyParser = require("body-parser");
const connectToMongo = require("./db");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

// express app
const app = express();
connectToMongo();
const port = process.env.PORT || 3000;

// middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.get(port, (req, res) => {
  res.send("Hello");
});

// definition of routes
const loginRouter = require("./routes/login");
const formRouter = require("./routes/newForm");
const findUserRouter = require("./routes/findUser");



// routes
app.use(loginRouter);
app.use(formRouter);
app.use(findUserRouter);
// app.use("/api/newuser", require("./routes/newUser"));



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
