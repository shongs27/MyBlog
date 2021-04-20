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
  },
  { timestamps: true }
);

const Landing = mongoose.model("Landing", LandingSchema);

module.exports = { Landing };
