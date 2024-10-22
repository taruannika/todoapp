const express = require("express");

const connect = require("./db/connect");

const app = express();

// connect to Mongo DB
connect();

module.exports = app;
