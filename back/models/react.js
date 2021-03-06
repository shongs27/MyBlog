const mongoose = require("mongoose");

const ReactSchema = mongoose.Schema(
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

const React = mongoose.model("React", ReactSchema);

module.exports = { React };
