const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    ip: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = { User };
