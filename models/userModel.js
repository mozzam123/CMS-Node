const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    maxlength: 15,
    required: true,
  },
  full_name: {
    type: String,
    maxlength: 100,
    required: true,
  },
  phone: {
    type: String,
    maxlength: 10,
    required: true,
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
    required: true,
  },
  role: {
    type: String,
    enum: ["author", "admin"],
    default: "author",
  },
});

// Define a virtual field for the username based on the email
// userSchema.virtual('username').get(function () {
//   return this.email;
// });

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
