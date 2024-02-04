const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20,
  },
  isGold: Boolean,
  phone: {
    type: String,
    required: true,
    minlength: 11,
    maxlength: 11,
  },
});

const Customer = mongoose.model("Customer", customerSchema);

router.get("/", async (req, res) => {
  const customers = await Customer.find();
  res.send(customers);
});

module.exports = router;
