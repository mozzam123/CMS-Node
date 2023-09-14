const mongoose = require("mongoose");

const contentItemSchema = new mongoose.Schema({
  title: {
    type: String,
    maxlength: 30,
    required: true,
  },
  body: {
    type: String,
    maxlength: 300,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserModel', // Assuming your User model is named 'User'
    required: true,
  },
  // summary: {
  //   type: String,
  //   maxlength: 100,
  //   default: "",
  // },
  // category: {
  //   type: String,
  //   maxlength: 20,
  //   default: "",
  // },
});

const ContentModel = mongoose.model("ContentItem", contentItemSchema);

module.exports = ContentModel;
