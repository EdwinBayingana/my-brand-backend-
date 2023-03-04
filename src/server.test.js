import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import allRoutes from '../src/routes/allRoutes.js'
import cors from 'cors';
import cookieParser from "cookie-parser"


const app = express();

dotenv.config();
app.use(cors());
app.use(cookieParser())
app.use(bodyParser.json())

app.get("/", (req,res) => {
    res.status(200).send(
        `<h1>Welcome to our Home Page</h1>`
    )
})

app.use("/api", allRoutes)

// Variable declaration 
const port = process.env.PORT;
const host = process.env.HOST;




// mongoose
// .set('strictQuery', false)
// // .connect('mongodb://localhost:27017')
// .then(()=>{
// console.log('Connected to mongoDB');
//     app.listen(port, () => {
//         console.log(`Server is listening at http://${host}:${port} `);

//     })
// })

export default app
