const { Schema, default: mongoose } = require("mongoose");

const UserScheme = new Schema({
  _id: String,
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  logged: {
    type: String,
    required: true,
  },
  premiumTaken,
});

const Users = mongoose.model("users", UserScheme);
module.exports = Users;
