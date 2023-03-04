import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cookieParser from "cookie-parser"


import allRoutes from "./routes/allRoutes.js"


// Dotenv configuration
dotenv.config();

// Create server instance
const app = express();

app.use(                                                                //!To inquire more info here
    express.urlencoded({
        extended: false,
    })
)


app.use(cors());                                                        //!To inquire more info here
app.use(bodyParser.json());                                             //? Used to convert every json we write into readable object info
app.use(cookieParser());


app.get("/", (req,res) => {
    res.status(200).send(
        `<h1>Welcome to our Home Page</h1>`
    )
})

app.use("/api", allRoutes)



// Variable declaration 
const port = process.env.PORT;
const host = process.env.HOST;



// const con = () => mongoose.connect(process.env.MONGODB_URL, {
//         useNewUrlParser: true,          //Ensures that the mongoDB drivers use the latest parser(used to compile data into user readable form)
//         useUnifiedTopology: true        //Ensures that mongoDB uses the Topology engine
//     })


// //Instance to listen to our server
// const startServer = () => app.listen(port);
// mongoose.set('strictQuery', false)


// Promise.all([con(), startServer()])      //This is a method in js that awaits for 2 functions to first complete, before proceeding with the code
//     .then(() => {
//         console.log("MongoDB connected");
//         console.log(`Server listening at http://${host}:${port}`)
//     })
//     .catch((err) => console.log(err))




mongoose
.set('strictQuery', false)
.connect('mongodb://localhost:27017')

.then(()=>{
console.log('Connected to mongoDB');
    app.listen(port, () => {
        console.log(`Server is listening at http://${host}:${port} `);
    })
})


export default app  
