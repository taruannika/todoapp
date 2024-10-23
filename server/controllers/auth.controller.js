const asyncHandler = require("express-async-handler");
const User = require("../models/user.model");
const generateToken = require("../utils/generateToken");
const { COOKIE_OPTIONS } = require("../utils/config");

const registerUser = asyncHandler(async (req, res) => {
  // Validation errors are handled by the user model and passed to the error handler middleware
  const { name, email, password } = req.body;

  // MongoServerErrors are handled by the user model and passed to the error handler middleware
  const user = new User({ name, email, password });

  const savedUser = await user.save();

  res
    .status(201)
    .json({ message: "User created successfully", data: savedUser });
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Handling validation errors and passing them to error handler middleware
  const messages = [];
  if (!email) {
    messages.push("Email is required");
  }
  if (!password) {
    messages.push("Password is required");
  }

  if (messages.length > 0) {
    return res.status(400).json({ message: messages });
  }

  // checking if user exists
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  // checking if password match with password in DB
  const passwordMatch = await user.checkPassword(password);
  if (!passwordMatch) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  // generating token
  const token = generateToken(user.id);

  // if user is found and password match set cookie and return user details for client
  if (user && passwordMatch) {
    res
      .cookie("token", token, COOKIE_OPTIONS)
      .status(200)
      .json({ id: user.id, name: user.name, email: user.email, token });
  } else {
    return res.status(500).json({ message: "Internal server error" });
  }
});

const logoutUser = asyncHandler(async (req, res) => {
  res.clearCookie("token", { path: "/" });
  res.status(200).json({ message: "Logged out successfully" });
});

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
};
