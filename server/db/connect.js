const mongoose = require("mongoose");

const { MONGO_URI } = require("../utils/config");
const { info, error } = require("../utils/logger");

const connect = async () => {
  try {
    info("Connecting to Mongo DB...");
    await mongoose.connect(MONGO_URI);
    info("Connected to Mongo DB successfully");
  } catch (err) {
    error("Error connecting to Mongo DB", err);
  }
};

module.exports = connect;
