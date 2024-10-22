const asyncHandler = require("express-async-handler");

const registerUser = asyncHandler(async (req, res) => {
  res.send("Register new user");
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
