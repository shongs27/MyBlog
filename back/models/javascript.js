const mongoose = require("mongoose");

const JavascriptSchema = mongoose.Schema(
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

const Javascript = mongoose.model("Javascript", JavascriptSchema);

module.exports = { Javascript };
