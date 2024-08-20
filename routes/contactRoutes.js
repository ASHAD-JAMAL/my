const express = require("express");
const Contact = require("../models/contactModel");

const router = express.Router();

router.post("/contact", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).send(contact);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/', (req, res) => {
  res.status(200).json({
    message: "hello"
  });
});

module.exports = router;
