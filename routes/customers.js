const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const Customers = require("../models/Customers");

//Route-3:Adding customer details using :POST:/api/customers/addCustomer
router.post(
  "/addCustomer",
  [
    (body("firstname", "Please enter a valid title.").isLength({ min: 3 }), //validation of user entered value
    body("email", "Please enter a valid email.").isEmail(),
    body("phone","Please enter a valid phone number").isLength({min:10})
    ),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const { firstname, lastname, email, phone, aboutCustomer } = req.body; //extracting the value from body
      const CustomerDetails = new Customers({
        firstname,
        lastname,
        email,
        phone,
        aboutCustomer
      });
      const saveCustomer = await CustomerDetails.save(); //customer details saved
      res.json(saveCustomer);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server internal error occured");
    }
  }
);
module.exports = router;