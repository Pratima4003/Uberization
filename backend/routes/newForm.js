// New Request Form Creation Route

const express = require("express");
const { body, validationResult } = require("express-validator");
const Form = require("../models/Form");
const router = express.Router();

router.post(
  "/",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("psno", "Enter a valid PS Number").isLength({ min: 9 }),
    body("phno", "Enter a valid Phone Number").isLength({ min: 10 }),
    body("pickLocation", "Enter correct PickUp Location").isLength({ min:2 }),
    body("dropLocation", "Enter correct DropUp Location").isLength({ min:2 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    Form.create({
      name: req.body.name,
      psno: req.body.psno,
      phno: req.body.phno,
      pickLocation: req.body.pickLocation,
      dropLocation: req.body.dropLocation,
      
    })
      .then((form) => res.json(form))
      .catch((err) => console.log(err));
  }
);

module.exports = router;
