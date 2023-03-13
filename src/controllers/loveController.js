// Love Reaction controller
import { Blog } from '../models/blogModel.js';
import jwt from 'jsonwebtoken';

class love {
  static async createLoveReaction(req, res) {
    const { id } = req.params;
    let _id = id;
    const { token } = req.cookies;
    // const { username } = jwt.verify(token, process.env.SECRET);
    // console.log(username);
    const objectToPush = { message: 'Blog loved successfully' };
    // const objectToPush = { username: username };
    const theSelectedBlog = await Blog.findOne({ _id: id });
    if (!theSelectedBlog) {
      return res.status(404).json({
        message: 'Blog not found',
      });
    }
    const blogToLove = await Blog.findByIdAndUpdate(
      _id,
      // { $push: { Reaction: { loveReaction: objectToPush } } },
      { $push: { loveReaction: objectToPush } },
      { new: true },
    );
    res.status(200).json({
      message: 'Love-reaction successfully added',
      data: blogToLove,
    });
  }
}

export default love;
