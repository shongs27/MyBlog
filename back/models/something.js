const mongoose = require("mongoose");

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
    dd: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const Something = mongoose.model("Something", SomethingSchema);

module.exports = { Something };
