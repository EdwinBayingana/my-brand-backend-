import { Blog } from '../models/blogModel.js';
import jwt from 'jsonwebtoken';

class like {
  static async createLike(req, res) {
    const { id } = req.params;
    let _id = id;
    const { token } = req.cookies;
    const { username } = jwt.verify(token, process.env.SECRET);
    // console.log(username);
    const objectToPush = { username: username };
    const theSelectedBlog = await Blog.findOne({ _id: id });
    if (!theSelectedBlog) {
      return res.status(404).json({
        message: 'Blog not found',
      });
    }
    // if (likedBlog) {
    //   return res.status(400).json({
    //     message: 'Blog already liked',
    //   });
    // }
    const blogToLike = await Blog.findByIdAndUpdate(
      _id,
      { $push: { likes: objectToPush } },
      { new: true },
    );
    res.status(200).json({
      message: 'Like successfully added',
      data: blogToLike,
    });
  }
}

export default like;
