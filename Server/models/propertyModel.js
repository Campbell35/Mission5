const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const propertySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Property", propertySchema);

// So what this model file is doing is definign the structure of our schema and what we need as inputs.  BUT
// It also creates a collection for us to call using "Property" and then we can get a return of all the info in the collection of "Property".
// This is where we can then use some4thing like Property.find() and get specifics on items in the collection.
