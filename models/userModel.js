const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please enter username !"],
    },
    email: {
      type: String,
      required: [true, "Please enter email !"],
      unique: [true, "Please enter Unique email !"],
    },
    password: {
      type: String,
      required: [true, "Please enter password !"],
    },
  },
  {
    timestamp: true,
  }
);


module.exports = mongoose.model("User" , userSchema)