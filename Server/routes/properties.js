const express = require("express");
const Property = require("../models/propertyModel");

const router = express.Router();

// Get ALL Properties
router.get("/", (req, res) => {
  res.json({ mssg: "Getting all propeties" });
});

// Get SINGLE Property
router.get("/:id", (req, res) => {
  res.json({ mssg: "Get a SINGLE property back" });
});

// POST a new property
router.post("/", async (req, res) => {
  const { title, price, location } = req.body;

  try {
    const property = await Property.create({ title, price, location });
    res.status(200).json(property);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
// DELETE a new property
router.delete("/:id", (req, res) => {
  res.json({ messg: "DELETING a new property" });
});
// UPDATING a new property
router.patch("/:id", (req, res) => {
  res.json({ messg: "UPDATING a new property" });
});

module.exports = router;
