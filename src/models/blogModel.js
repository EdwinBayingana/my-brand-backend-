import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter the blog's title"],
      default: 0, //! To ask for more info on why we use this
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
      required: [false, 'Please input an image'],
    },
    comments: {
      type: Array,
    },

    // comments: [
    //     {
    //         type: String,
    //         created: {type: Date, default: Date.now},

    //     }
    // ]

    // createdAt: {
    //   type: Date,
    //   default: Date.now
    // }
  },
  {
    timestamps: true, //? Creates 2 fields: date-created && date-modified
  },
);

const Blog = mongoose.model('Blogs', blogSchema);

export { Blog };

// const mongoose = require('mongoose')

// const productSchema = mongoose.Schema(
//     {
//         name: {
//             type: String,
//             required: [true, "Please enter a product name"]
//         },
//         quantity: {
//             type: Number,
//             required: true,
//             default: 0                                          //! To ask for more info on why we use this
//         },
//         price: {
//             type: Number,
//             required: true
//         },
//         image: {
//             type: String,
//             required: false
//         }
//     },
//     {
//         timestamps: true                                        //? Creates 2 fields: date-created && date-modified
//     }
// )

// const Product = mongoose.model('Product', productSchema);

// module.exports = Product;
