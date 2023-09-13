const UserModel = require("./../models/userModel");

exports.login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  var existingUser = await UserModel.findOne({
    email: email,
    password: password,
  });
  if (existingUser) {
    res.status(200).json({ message: "user logged in !!" });
  } else {
    res.status(401).json({ message: "Invalid Credentials" });
  }
};

exports.register = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  var existingUser = await UserModel.findOne({ email: email });

  if (existingUser) {
    return res.status(401).json({ message: "user already exists" });
  }

  const newUser = new UserModel({
    email: email,
    password: password,
  });

  try {
    const savedUser = await newUser.save();
    console.log("SavedUser : ", savedUser);
    res.status(201).json({ message: "success", data: savedUser });
  } catch (error) {
    res.status(401).json({ error });
  }
};
