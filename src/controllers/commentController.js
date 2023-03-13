import { Blog } from '../models/blogModel.js';
import jwt from 'jsonwebtoken';
import { commentModel } from '../models/commentModel.js';
import express from 'express';

class comment {
  static async createComment(req, res) {
    const { id } = req.params;
    let _id = id;
    const { userName } = req.body;
    const { comment } = req.body;
    const objectToPush = { name: userName, comment: comment };
    const blogToComment = await Blog.findByIdAndUpdate(
      _id,
      { $push: { comments: objectToPush } },
      { new: true },
    );
    res.status(200).json({
      message: 'Comment successfully added',
      data: blogToComment,
    });
  }

  // static async getComments(req, res) {
  //   const allBlogs = await Blog.find();
  //   // console.log(allBlogs);
  //   allBlogs.forEach((blog, index) => {
  //     // console.log(blog.comments);
  //     try {
  //       const blogComments = blog.comments;
  //       console.log(blogComments);
  //       res.status(200).json({
  //         message: `Total is ${blogComments.length} Comments`,
  //         // data: blogComments,
  //       });
  //     } catch (error) {
  //       console.log(error);
  //       res.status(500).json({
  //         message: error.message,
  //       });
  //     }
  //   });
  // }

  static async getComments(req, res) {
    try {
      const allBlogs = await Blog.find();
      // console.log(allBlogs);
      allBlogs.forEach((blog, index) => {
        // console.log(blog.comments);
        const blogComments = blog.comments;
        console.log(blogComments);
        res.status(200).json({
          message: `Total is ${blogComments.length} Comments`,
          // data: blogComments,
        });
        // process.exit(1);
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.message,
      });
    }
  }
}

export default comment;
