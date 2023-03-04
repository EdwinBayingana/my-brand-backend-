import {Blog} from "../models/blogModel.js";
import express from "express"
// import cloudinary from "cloudinary"
import dotenv from "dotenv"

import multer from "multer"
import cloudinary from 'cloudinary';
// import { theCloudinaryStorage } from 'multer-storage-cloudinary' 



class blogController{

                                                    //......................CRUD Operations......................


    // * Get a specific blog
    static async getBlog(req,res){
        try {
            const {id} = req.params;

            const blog = await Blog.findOne({ _id: id });
            // console.log(blog);
            if(!blog){
                return res.status(404).json({
                    message: `Blog with id: ${id} was not found`
                })
            } else {
                return res.status(200).json({
                    data: blog
                })
            }

        } catch (error) {
            res.status(500).json({
                message: error.message
            })
        }
    }

    // * CREATE a blog

    // static async createBlog(req,res){
    //     cloudinary.config({
    //         cloud_name: `${process.env.CLOUD_NAME}`,
    //         api_key: `${process.env.CLOUDINARY_API_KEY}`,
    //         api_secret: `${process.env.CLOUDINARY_API_SECRET}`
    //     });
    //     try {
    //         const storage = new theCloudinaryStorage({ 
    //             cloudinary,
    //             params:{
    //               folder: 'blogs-image', 
    //               allowed_formats: ['jpg', 'png', 'jpeg']
    //             }
    //           });
    //         const upload = multer({ storage }).single('imageUrl');
    //         upload(req, res, async (err) =>{
    //             if(err){
    //              return console.log(err)
    //             }
    //             const { title, author, body, imageUrl } = req.body;
    //             const blogs = await Blog.find();
    //             const id = blogs.length;
    //             const newBlog = await Blog.create({ id, title, author, body, imageUrl })
    //                 res.status(200).json({
    //                     message: "Blog Created successfully",
    //                     data: newBlog
    //                 })
    //         })
            
    //     } catch (error) {
    //         console.log(error);
    //         res.status(500).json({
    //             message: error.message
    //         })
    //     }
    // }

    static async createBlog(req,res){
    dotenv.config();
    cloudinary.config({
        cloud_name: `${process.env.CLOUD_NAME}`,
        api_key: `${process.env.CLOUDINARY_API_KEY}`,
        api_secret: `${process.env.CLOUDINARY_API_SECRET}`
    })
    try {
        cloudinary.uploader.upload(req.file.path, async (result, err) => {

            const {title, body, author} = req.body
            const newBlog = {title, body, author, imageUrl: result.url}
            if(!result){
                return res.status(500).json({
                    message: "Error while uploading the Image"
                })
            } else {
                await Blog.create({title, body, author, imageUrl: result.url});

                return res.status(201).json({
                            message: "New Blog created successfully",
                            data: newBlog
                })
            }
        })

        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        })
    }
}

    // * READ a blog
    static async getBlogs(req,res) {
        try {
            const blogs = await Blog.find();
            res.status(200).json({
                data: blogs
            })
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: error.message
            })
        }
    }

    // * UPDATE a blog
    static async updateBlog(req, res){
        try {
            const {id} = req.params;
            // const blogId = id;
            const {title, author, body, imageUrl} = req.body
            const blogToUpdate = await Blog.findOne({_id: id});

            if(!blogToUpdate){
                return res.status(404).json({
                    message: `Blog with id: ${id} was not found`
                })
            } else {
                const blogUpdated = await Blog.findByIdAndUpdate(id, {title, author, body, imageUrl}, {new: true})
                res.status(200).json({
                    message: "Blog Updated Successfully",
                    data: blogUpdated
                })
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: error.message
            })
        }
    }

    // * DELETE a blog
    static async deleteBlog(req,res){
        const {id} = req.params;
        const blogId = await Blog.findOne({ _id : id });

        try {
            if(!blogId){
                res.status(401).json({
                    message: `Blog with id: ${id} was not found`
                })
            } else {
                await Blog.findByIdAndDelete(id);
                res.status(200).json({
                    message: "The blog was successfully deleted"
                })
            }

        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: error.message
            })
        }
    }

}

export default blogController


