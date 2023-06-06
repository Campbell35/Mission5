const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const applicationSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Application", applicationSchema);

// So what this model file is doing is definign the structure of our schema and what we need as inputs.  BUT
// It also creates a collection for us to call using "Property" and then we can get a return of all the info in the collection of "Property".
// This is where we can then use some4thing like Property.find() and get specifics on items in the collection.
