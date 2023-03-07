import express from 'express';
// import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import allRoutes from './routes/allRoutes.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';

const app = express();

dotenv.config();
app.use(cors());
app.use(cookieParser());
// app.use(bodyParser.json());
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send(`<h1>Welcome to our Home Page</h1>`);
});

app.use('/api', allRoutes);

//connect to db
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.set('strictQuery', true);
const db = () => {
  mongoose.connect(process.env.MONGODB_URL, options).then(() => {
    console.log('🟢 MongoDB connected');
    console.log(`🟢 Database connected at http://${process.env.MONGODB_URL}`);
    // swaggerDocs(app, port);
  });
};

export default app;
