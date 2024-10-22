require("dotenv").config();

const PORT = process.env.PORT || 8000;
const JWT_SECRET = process.env.JWT_SECRET;
const MONGO_URI = process.env.MONGO_URI;
const CLIENT_URL = process.env.CLIENT_URL;

module.exports = { PORT, JWT_SECRET, MONGO_URI, CLIENT_URL };
