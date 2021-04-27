const mongoose = require("mongoose");

const DislikeSchema = mongoose.Schema(
  {
    postId: {
      type: String,
    },
    commentId: {
      type: String,
    },
  },
  { timestamps: true }
);

const Dislike = mongoose.model("Dislike", DislikeSchema);

module.exports = { Dislike };
