const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  full_name: {
    type: String,
    maxlength: 100,
  },
  phone: {
    type: String,
    maxlength: 10,
    default: 7021825977,
  },
  address: {
    type: String,
    maxlength: 255,
    default: "",
  },
  city: {
    type: String,
    maxlength: 100,
    default: "",
  },
  state: {
    type: String,
    maxlength: 100,
    default: "",
  },
  country: {
    type: String,
    maxlength: 100,
    default: "",
  },
  pincode: {
    type: String,
    maxlength: 6,
    default: 400102,
  },
  role: {
    type: String,
    enum: ["author", "admin"],
    default: "author",
  },
  token: { type: String },
});

// Define a virtual field for the username based on the email
userSchema.virtual('username').get(function () {
  return this.email;
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
