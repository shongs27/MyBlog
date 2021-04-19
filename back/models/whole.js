const mongoose = require("mongoose");

const wholeSchema = mongoose.Schema(
  {
    title: {
      type: String,
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

const Whole = mongoose.model("Whole", wholeSchema);

module.exports = { Whole };
