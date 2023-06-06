import mongoose, { Schema, Document } from 'mongoose';

// Define the interface for the Property document
interface IProperty extends Document {
  id: number;
  Address: string;
  Suburb: string;
  Price: number;
  Bedrooms: number;
  // Add more properties as needed
}

// Define the schema for the Property document
const propertySchema = new Schema<IProperty>({
  id: { type: Number, required: true },
  Address: { type: String, required: true },
  Suburb: {type: String, required: true},
  Price: {type: Number, required: true},
  Bedrooms: {type: Number, required: true}
});

// Connect to the "MetroProperties" database in MongoDB Atlas
mongoose.connect('mongodb+srv://campbellm:FqVCwukZyT6vIwNZ@Mission-5-cluster.mongodb.net/MetroProperties?retryWrites=true&w=majority')
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
  });

// Create the Property model
const PropertyModel = mongoose.model<IProperty>('Property', propertySchema);

export default PropertyModel;
