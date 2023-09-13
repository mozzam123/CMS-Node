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
  // author: {
  //   type: String,
  //   default: "", // If you want to use the default _id as author reference
  // },
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
