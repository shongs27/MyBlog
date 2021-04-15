const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GitSchema = mongoose.Schema(
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

const Git = mongoose.model("Git", GitSchema);

module.exports = { Git };
