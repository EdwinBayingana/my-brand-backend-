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



















// //ES5 below

// const express = require("express");
// const mongoose = require("mongoose");
// const Blog = require('./models/blogModel');
// const app = express()

//                                                                     //! To ask for more explanation on "Middleware" functionality
                                                                    
// // Let's add a Middleware for our application to be able to accept json format
// app.use(express.json())
// app.use(express.urlencoded({extended: false}))


// //The Routes
// app.get("/", (req, res) => {
//     res.send('Hello');
// })


// app.get('/blogs', (req, res) => {
//     res.send('Blog #1')
// })

// // Getting data from the Database
// app.get('/blogs', async(req, res) => {                              //! Async is Important because we are connecting to the database
//     try { 
//         const blogs = await Blog.find({});
//         res.status(200).json(blogs);
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json({message: error.message})
//     }
// })

// app.get('/blogs/:id', async(req, res) => {
//     try {
//         const {id} = req.params;
//         const blog = await Blog.findById(id);
//         res.status(200).json(blog);
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json({message: error.message})
//     }
// })

// // Saving data in the Database
// app.post('/blogs', async(req, res) => {                                
//     try {
//         const blog = await Blog.create(req.body)
//         res.status(200).json(blog);

//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json({message: error.message})
//     }
// })

// // Update a blog in the Database
// app.put('/blogs/:id', async(req, res) => {
//     try {
//         const {id} = req.params;
//         const blog = await Blog.findByIdAndUpdate(id, req.body)
//         // What happens if we can't find that specific blog in the database
//         if(!blog){
//             return res.status(404).json({message: `Can't find any Blog with ID ${id}`})
//         } else {
//         res.status(200).json(blog)
//         }

//     } catch (error) {
//         res.status(500).json({message: error.message})
//     }
// })


// // Delete a blog from the database
// app.delete('/blogs/:id', async(req, res) => {
//     try {
//         const {id} = req.params;
//         const blog = await Blog.findByIdAndDelete(id);
//         if(!blog){
//             return res.status(404).json({message: `Cannot find any Blog with ID ${id}`})
//         } else{
//             return res.status(500).json(blog);
//         }
//     } catch (error) {
//         res.status(500).json({message: error.message})
//     }
// })



// mongoose
//     .set('strictQuery', false)
//     .connect('mongodb://localhost:27017')
//     .then(()=>{
//         console.log('Connected to mongoDB');
//         app.listen(3000, () =>{
//             console.log('Your Server is running on port 3000')
//         }) 
        
//     })
//     .catch((error) => {
//          console.log(error);
//     })    
