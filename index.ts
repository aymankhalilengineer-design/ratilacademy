import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI as string);
    console.log(`🚀 تم الاتصال بنجاح: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ فشل الاتصال: ${error}`);
  }
};

connectDB();