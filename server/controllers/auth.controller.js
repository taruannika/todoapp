const asyncHandler = require("express-async-handler");
const User = require("../models/user.model");

const registerUser = asyncHandler(async (req, res) => {
  // Validation errors are handled by the user model and passed to the error handler middleware
  const { name, email, password } = req.body;

  const user = new User({ name, email, password });

  const savedUser = await user.save();

  res
    .status(201)
    .json({ message: "User created successfully", data: savedUser });
});

const loginUser = asyncHandler(async (req, res) => {
  res.send("Login user");
});

const logoutUser = asyncHandler(async (req, res) => {
  res.send("Logout user");
});

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
};
