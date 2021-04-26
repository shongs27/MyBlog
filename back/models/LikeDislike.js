const mongoose = require("mongoose");

const LikeDislikeSchema = mongoose.Schema(
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

const LikeDislike = mongoose.model("LikeDislike", LikeDislikeSchema);

module.exports = { LikeDislike };
