require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const applicationRoutes = require("./routes/applications");

// Creatuion of the express app
const app = express();

// Some middle ware to check what is coming in and if it is json.
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Start of the routes section
app.use("/api/application", applicationRoutes);
// Connecting to DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        "Connected to Mongo and server is up and running on port",
        process.env.PORT
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });
