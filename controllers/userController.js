const UserModel = require("./../models/userModel");

exports.login = async (req, res) => {
  console.log("Hit the login endpoint");
  res.status(201).json({ message: "hit login endpoint " });
};

exports.register = async (req, res) => {
  console.log("Hit the register endpoint");
  res.status(201).json({ message: "hit register endpoint " });
};
