const { error } = require("../utils/logger");

const VALIDATION_ERROR = "ValidationError";
const MONGO_SERVER_ERROR = "MongoServerError";

const errorHandler = (err, req, res, next) => {
  error(`Error name: ${err.name}, Error code: ${err.code}`);

  switch (err.name) {
    case VALIDATION_ERROR:
      const messages = Object.values(err.errors).map(
        (messages) => messages.message
      );
      return res.status(400).json({ message: messages });

    case MONGO_SERVER_ERROR:
      if (err.code === 11000) {
        return res.status(400).json({ message: "User already exists" });
      } else {
        return res.status(400).json({ message: err.message });
      }

    default:
      return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = errorHandler;
