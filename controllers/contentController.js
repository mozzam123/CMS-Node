const contentModel = require("./../models/contentModel");
const userModel = require("./../models/userModel");

exports.getContent = async (req, res) => {
  const username = req.body.username;

  const existingUser = await userModel.findOne({ email: username });

  try {
    if (existingUser) {
      // console.log(existingUser);
      if (existingUser.role === "author") {
        console.log("*******role is author");
        const authorContent = await contentModel.findOne({ email: username });
        return res.json({ message: authorContent });
      } else if (existingUser.role === "admin") {
        console.log("*******role is admin");
      }
    }
    res.json({ message: "in the getcontent" });
  } catch (error) {
    res.json({ message: error });
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
