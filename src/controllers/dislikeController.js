// Dislike Reaction controller
import { Blog } from '../models/blogModel.js';
import jwt from 'jsonwebtoken';

class dislike {
  static async createDislikeReaction(req, res) {
    const { id } = req.params;
    let _id = id;
    const { token } = req.cookies;
    const { username } = jwt.verify(token, process.env.SECRET);
    console.log(username);
    const objectToPush = { username: username };
    const theSelectedBlog = await Blog.findOne({ _id: id });
    if (!theSelectedBlog) {
      return res.status(404).json({
        message: 'Blog not found',
      });
    }
    const blogToDislike = await Blog.findByIdAndUpdate(
      _id,
      // { $push: { Reaction: { dislikeReaction: objectToPush } } },
      { $push: { dislikeReaction: objectToPush } },
      { new: true },
    );
    res.status(200).json({
      message: 'Dislike-reaction successfully added',
      data: blogToDislike,
    });
  }
}

export default dislike;
