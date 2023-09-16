const UserModel = require("./../models/userModel");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const jwt = require("jsonwebtoken")

exports.login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  var existingUser = await UserModel.findOne({
    email: email,
  });
  if (existingUser && (await bcrypt.compare(password, existingUser.password))) {
    // Create token
    const token = jwt.sign(
      { email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );
    // save user token
    existingUser.token = token;
    res.status(200).json({ message: "user logged in !!", token: token });
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

  //Encrypt user password
  encryptedPassword = await bcrypt.hash(password, 10);

  const newUser = new UserModel({
    email: email,
    password: encryptedPassword,
    role: req.body.role,
  });

  // Create token
  const token = jwt.sign({ email }, process.env.TOKEN_KEY, {
    expiresIn: "2h",
  });

  console.log("Token Key: ", process.env.TOKEN_KEY);

  // save user token
  newUser.token = token;


  try {
    console.log('*****8In the try section');
    const savedUser = await newUser.save();
    console.log("SavedUser : ", savedUser.email);
    res.status(201).json({ message: "success", data: savedUser });
  } catch (error) {
    res.status(401).json({ error });
  }
};
