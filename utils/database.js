import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);
  if (isConnected) {
    console.log('Mongoose is connected');
    return;
  }

  try {
    await mongoose.connect(process.env.URL, {
      dbName: 'prompt',
    });
    isConnected = true;
    console.log('Mongoose is connected');
  } catch (error) {
    console.log(error);
  }
};
