import mongoose, { Schema, Document } from 'mongoose';

interface IProperty extends Document {
  name: string;
  description: string;
}

const propertySchema = new Schema<IProperty>({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

const PropertyModel = mongoose.model<IProperty>('Property', propertySchema);

export default PropertyModel;
