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
        const authorContent = await contentModel.findOne({ email: username})
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
