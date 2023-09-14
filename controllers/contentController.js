const contentModel = require("./../models/contentModel");
const userModel = require("./../models/userModel");

exports.getContent = async (req, res) => {
  const username = req.body.username;
  console.log("username:", username);
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
