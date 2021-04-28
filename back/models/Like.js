const mongoose = require("mongoose");

const LikeSchema = mongoose.Schema(
  {
    postId: {
      type: String,
    },
    commentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  },
  { timestamps: true }
);

const Like = mongoose.model("Like", LikeSchema);

module.exports = { Like };
