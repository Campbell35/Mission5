import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log('MongoDB connection successful.');
  } catch (err) {
    console.error('MongoDB connection failed.');
    process.exit(1);
  }
};

export default connectDb;
