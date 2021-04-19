const mongoose = require("mongoose");

const PersonalSchema = mongoose.Schema(
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

const Personal = mongoose.model("Personal", PersonalSchema);

module.exports = { Personal };
