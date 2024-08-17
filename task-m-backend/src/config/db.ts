import mongoose from 'mongoose';

// connect to the monodb database
const MONGO_URI = 'mongodb://localhost:27017/Task-management-system'
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI);
    console.log(`MongoDB is Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
};

export default connectDB;