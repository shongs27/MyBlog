const mongoose = require("mongoose");

const LandingSchema = mongoose.Schema(
  {
    title: {
      type: String,
      index: true,
    },
    content: {
      type: String,
    },
    category: {
      type: String,
    },
    LikeNumber: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Landing = mongoose.model("Landing", LandingSchema);

module.exports = { Landing };
