const express = require("express");
// import mongoose from 'mongoose';
const { body, validationResult } = require("express-validator");
const router = express.Router();
const User = require("../models/Users");

router.post(
  "/",
  [
    body("name", "Please enter a valid name.").isLength({ min: 5 }),
    body("email", "Please enter a valid email.").isEmail(),
    //
    body("password", "password must be at least 5 characters long").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    //check whether the entered values are valid or not.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let user = await User.findOne({ email: req.body.email }); //check whether the entered email already exists
      if (user) {
        return res
          .status(400)
          .json({ error: "User with this email already exists." });
      }

      //creating a new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });

      res.json(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured");
    }
  }
);

module.exports = router;
