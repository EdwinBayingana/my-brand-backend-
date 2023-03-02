import { Blog } from "../models/blogModel.js";
import jwt from "jsonwebtoken";


class comment {
  static async comment(req, res) {
    const { id } = req.params, _id = id;
    const { token } = req.cookies;
    const { username } = jwt.verify(token, process.env.SECRET_KEY);
    const { comment } = req.body;
    const objectToPush = { name: username, comment: comment };
    const blogToComment = await Blog.findByIdAndUpdate(_id, { $push: { comments: objectToPush } }, { new: true })
    res.status(200).json({
        message: "Blog has been found",
        data: blogToComment
    })
  }
}

export default comment