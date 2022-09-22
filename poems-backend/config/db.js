require("dotenv").config();
const mongoose = require("mongoose");
const DATABASE_URL = process.env.DATABASE_URL;

//DATABASE CONNECTION
mongoose.connect(DATABASE_URL);

//IS DATABASE CONNECTED?
const db = mongoose.connection
    .on("connected", () => console.log("database connected :'-)"))
    .on("disconnected", () => console.log("FAILED database failed to connect"))
    .on("error", (error) => console.log(error));

module.exports = db;