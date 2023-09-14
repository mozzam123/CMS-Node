const contentModel = require("./../models/contentModel");
const userModel = require("./../models/userModel");

exports.getContent = async (req, res) => {
  const username = req.body.username;
  try {
    const existingUser = await userModel.findOne({ email: username });
    if (!existingUser) {
      return res.status(404).json({ message: "user not found" });
    }
    if (existingUser.role == "author") {
      const authorContent = await contentModel.find({author: existingUser._id,});
      return res.status(200).json({ message: authorContent });
    }
    else if (existingUser.role == "admin"){
        const allContent = await contentModel.find()
        return res.status(200).json({message: allContent})
    }
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

exports.createContent = async (req, res) => {
  const username = req.body.username;
  const title = req.body.content.title;
  const body = req.body.content.body;

  const existingUser = await userModel.findOne({ email: username });

  if (existingUser) {
    if (existingUser.role === "author") {
      const newcontent = new contentModel({
        body: body,
        title: title,
        author: existingUser._id,
      });
      const savedContent = await newcontent.save();
      res.json({ message: "success", savedContent });
    } else if (existingUser.role === "admin") {
      res.json({ message: "Admins are not allowed to create content" });
    }
  } else {
    res.json({ message: "Invalid credentials" });
  }
};


exports.deleteContent = async (req, res) => {
  const username = req.body.username;
  const content_id = req.body.content_id;
  try {
    const existingUser = await userModel.findOne({ email: username });
    if (!existingUser) {
      return res.status(404).json({ message: "user not found" });
    }

    // check if user is admin
    if (existingUser.role === "admin") {
      const deleteContent = await contentModel.findByIdAndDelete(content_id);
      if (!deleteContent) {
        return res.status(404).json({ message: "Content Not Found" });
      }
      return res.status(200).json({ message: "Content Deleted Successfully" });
    }

    // User is not an admin, so check if they are the author of the content
    const content = await contentModel.findById(content_id);
    if (!content) {
      return res.status(404).json({ message: "Content not found" });
    }

    if (content.author.equals(existingUser._id)) {
      const deleteContent = await contentModel.findByIdAndDelete(content_id);
      if (!deleteContent) {
        return res.status(404).json({ message: "Content Not found" });
      }
      return res.status(200).json({ message: "Content deleted succesfully" });
    } else {
      return res
        .status(401)
        .json({ message: "Only content's author can delete the content" });
    }
  } catch (error) {
    res.status(404).json({ message: error });
  }
};



exports.searchContent = async (req, res) => {
    const searchTerm = req.body.query;
    console.log('search query:', searchTerm);
    try {
      // Perform the search operation based on the searchTerm
      // You can use the Mongoose model to search the content in the database
      const searchResults = await contentModel.find({ $text: { $search: searchTerm } });
      console.log('Search result:', searchResults);
      if (searchResults.length === 0) {
        return res.status(404).json({ message: "Search result not found" });
      }
      return res.status(200).json({ results: searchResults });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  