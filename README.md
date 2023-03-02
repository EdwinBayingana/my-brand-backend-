CORS = Cross-Origin Resource Sharing

<!-- ................ES5 code for CRUD Operations only................ -->

//ES5 below

const express = require("express");
const mongoose = require("mongoose");
const Blog = require('./models/blogModel');
const app = express()

                                                                    //! To ask for more explanation on "Middleware" functionality

// Let's add a Middleware for our application to be able to accept json format
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//The Routes
app.get("/", (req, res) => {
res.send('Hello');
})

app.get('/blogs', (req, res) => {
res.send('Blog #1')
})

// Getting data from the Database
app.get('/blogs', async(req, res) => { //! Async is Important because we are connecting to the database
try {
const blogs = await Blog.find({});
res.status(200).json(blogs);
} catch (error) {
console.log(error.message);
res.status(500).json({message: error.message})
}
})

app.get('/blogs/:id', async(req, res) => {
try {
const {id} = req.params;
const blog = await Blog.findById(id);
res.status(200).json(blog);
} catch (error) {
console.log(error.message);
res.status(500).json({message: error.message})
}
})

// Saving data in the Database
app.post('/blogs', async(req, res) => {  
 try {
const blog = await Blog.create(req.body)
res.status(200).json(blog);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }

})

// Update a blog in the Database
app.put('/blogs/:id', async(req, res) => {
try {
const {id} = req.params;
const blog = await Blog.findByIdAndUpdate(id, req.body)
// What happens if we can't find that specific blog in the database
if(!blog){
return res.status(404).json({message: `Can't find any Blog with ID ${id}`})
} else {
res.status(200).json(blog)
}

    } catch (error) {
        res.status(500).json({message: error.message})
    }

})

// Delete a blog from the database
app.delete('/blogs/:id', async(req, res) => {
try {
const {id} = req.params;
const blog = await Blog.findByIdAndDelete(id);
if(!blog){
return res.status(404).json({message: `Cannot find any Blog with ID ${id}`})
} else{
return res.status(500).json(blog);
}
} catch (error) {
res.status(500).json({message: error.message})
}
})

mongoose
.set('strictQuery', false)
.connect('mongodb://localhost:27017')
.then(()=>{
console.log('Connected to mongoDB');
app.listen(3000, () =>{
console.log('Your Server is running on port 3000')
})

    })
    .catch((error) => {
         console.log(error);
    })
