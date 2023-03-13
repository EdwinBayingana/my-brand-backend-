import { Blog } from '../models/blogModel.js';
import jwt from 'jsonwebtoken';

class fire {
  static async createFireReaction(req, res) {
    const { id } = req.params;
    let _id = id;
    const { token } = req.cookies;
    // const { username } = jwt.verify(token, process.env.SECRET);
    // console.log(username);
    const objectToPush = { message: 'Blog fired successfully' };
    // const objectToPush = { username: username };
    const theSelectedBlog = await Blog.findOne({ _id: id });
    if (!theSelectedBlog) {
      return res.status(404).json({
        message: 'Blog not found',
      });
    }
    const blogToFire = await Blog.findByIdAndUpdate(
      _id,
      // { $push: { Reaction: { fireReaction: objectToPush } } },
      { $push: { fireReaction: objectToPush } },
      { new: true },
    );
    res.status(200).json({
      message: 'Fire-reaction successfully added',
      data: blogToFire,
    });
  }
}

export default fire;
