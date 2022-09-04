require("dotenv").config();
const { Client } = require("pg");
const connection = process.env.DB;
const db = new Client(connection);

module.exports = db;
