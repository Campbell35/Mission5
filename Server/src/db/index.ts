import mongoose from 'mongoose';

const mongoDBURI = 'mongodb://localhost:27017/mydatabase';

mongoose.connect(mongoDBURI, { useUnifiedTopology: true } as mongoose.ConnectOptions)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
