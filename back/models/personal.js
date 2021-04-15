const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PersonalSchema = mongoose.Schema(
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

const Personal = mongoose.model("Personal", PersonalSchema);

module.exports = { Personal };
