// Thinking/NotSure Reaction controller
import { Blog } from '../models/blogModel.js';
import jwt from 'jsonwebtoken';

class thinkingReaction {
  static async createThinkingReaction(req, res) {
    const { id } = req.params;
    let _id = id;
    const { token } = req.cookies;
    // const { username } = jwt.verify(token, process.env.SECRET);
    // console.log(username);
    const objectToPush = { message: 'Blog LOL successfully' };
    // const objectToPush = { username: username };
    const theSelectedBlog = await Blog.findOne({ _id: id });
    if (!theSelectedBlog) {
      return res.status(404).json({
        message: 'Blog not found',
      });
    }
    const blogToThink = await Blog.findByIdAndUpdate(
      _id,
      // { $push: { Reaction: { thinkingReaction: objectToPush } } },
      { $push: { thinkingReaction: objectToPush } },
      { new: true },
    );
    res.status(200).json({
      message: 'Thinking-reaction successfully added',
      data: blogToThink,
    });
  }
}

export default thinkingReaction;
