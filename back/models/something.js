const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SomethingSchema = mongoose.Schema(
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

const Something = mongoose.model("Something", SomethingSchema);

module.exports = { Something };
