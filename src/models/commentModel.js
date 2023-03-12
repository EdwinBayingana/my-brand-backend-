import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "Please enter the commenter's name(s)"],
      // default: 0, //! To ask for more info on why we use this
    },
    comment: {
      type: String,
      required: [true, 'Please enter the comment'],
    },
  },
  {
    timestamps: true, //? Creates 2 fields: date-created && date-modified
  },
);

const commentModel = mongoose.model('Comments', commentSchema);

export { commentModel };
