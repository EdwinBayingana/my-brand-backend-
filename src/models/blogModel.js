// import { array } from 'joi';
import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter the blog's title"],
      // default: 0, //! To ask for more info on why we use this
    },
    author: {
      type: String,
      required: [true, "Please enter the author's name"],
    },
    body: {
      type: String,
      required: [true, "Please enter the blog's body"],
    },
    imageUrl: {
      type: String,
      // required: true,
    },
    comments: {
      type: Array,
    },
    likes: {
      type: Array,
    },
    fireReaction: {
      type: Array,
    },
    loveReaction: {
      type: Array,
    },
    dislikeReaction: {
      type: Array,
    },
    thinkingReaction: {
      type: Array,
    },
  },
  {
    timestamps: true, //? Creates 2 fields: date-created && date-modified
  },
);

const Blog = mongoose.model('Blogs', blogSchema);

export { Blog };
