import mongoose from 'mongoose';

// ! 🍀 mongoDB connection below 🍀
// Declare a variable named option and assign optional settings
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.set('strictQuery', true);
const db = () => {
  mongoose.connect(process.env.MONGODB_URL, options).then(() => {
    console.log('🧭 MongoDB connected ');
    console.log(`🟢 Database connected at ${process.env.MONGODB_URL}`);
    // swaggerDocs(app, port);
  });
};

export default db;
