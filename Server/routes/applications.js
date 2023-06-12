const express = require("express");

const {
  createApplication,
  getAllApplications,
  getSingleApplication,
  deleteApplication,
  updateApplication,
} = require("../controllers/applicationController");

const router = express.Router();

// Get ALL Applications
router.get("/", getAllApplications);

// Get SINGLE Applicaion
router.get("/:id", getSingleApplication);

// POST a new application
router.post("/", createApplication);

// DELETE a n application
router.delete("/:id", deleteApplication);
// UPDATING an application
router.patch("/:id", updateApplication);

module.exports = router;
