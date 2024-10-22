const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const connect = require("./db/connect");

const authRoutes = require("./routes/auth.routes");
const errorHandler = require("./middleware/errorHandler");

const { CORS_OPTIONS } = require("./utils/config");

const app = express();

// connect to Mongo DB
connect();

// middlewares
app.use(cors(CORS_OPTIONS));
app.use(express.json());
app.use(cookieParser());

// routes
app.use("/api/auth", authRoutes);

// errorHandler
app.use(errorHandler);

module.exports = app;
