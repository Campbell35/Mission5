const Application = require("../models/applicationModel");
const mongoose = require("mongoose");

// GET - ALL
const getAllApplications = async (req, res) => {
  const applications = await Application.find({}).sort({ createdAt: -1 });
  res.status(200).json(applications);
};

// GET - SINGLE
const getSingleApplication = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ error: "No such application exists - possibly invalid ID." });
  }

  const application = await Application.findById(id);

  if (!application) {
    return res.status(404).json({ error: "No such property exists - Sorry" });
  }

  res.status(200).json(application);
};

// PORT
const createApplication = async (req, res) => {
  const { name, number, email, message } = req.body;
  try {
    const application = await Application.create({
      name,
      number,
      email,
      message,
    });
    res.status(200).json(application);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE
const deleteApplication = async (req, res) => {
  const { id } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ error: "No such application exists - possibly invalid ID." });
  }
  const application = await Application.findOneAndDelete({ _id: id });
  if (!application) {
    return res
      .status(404)
      .json({ error: "No such application exists - Sorry" });
  }
  res.status(200).json(application);
};

// UPDATE
const updateApplication = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ error: "No such application exists - possibly invalid ID." });
  }
  const application = await Application.findOneAndUpdate({ _id: id }, {});
};

module.exports = {
  createApplication,
  getAllApplications,
  getSingleApplication,
  deleteApplication,
  updateApplication,
};
