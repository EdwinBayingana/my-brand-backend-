import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import allRoutes from './routes/allRoutes.js';
import db from './db.js';

import swaggerDocs from '../swagger/swagger.js';

// Dotenv configuration
dotenv.config();

db();

// Create server instance
const app = express();

app.use(
  express.urlencoded({
    extended: false,
  }),
);

app.use(cors());
app.use(express.json()); //? Used to convert every json we write into readable object info
app.use(cookieParser());

app.get('/', (req, res) => {
  res.status(200).send(`<h1>Welcome to my Home Page</h1>`);
});

app.use('/api', allRoutes);

// Variable declaration
const port = process.env.PORT;
const host = process.env.HOST;

// Listen to the server
export default app.listen(port, () => {
  console.log(`Server running at http://${host}:${port}`);
  swaggerDocs(app, port);
  app.use((req, res) => {
    res.status(404).json({
      message: "Page doesn't exist",
    });
  });
});

// export default app
