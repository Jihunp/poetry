require("dotenv").config();
require("./config/db");

//DEPENDENCIES
const express = require("express");
const cors = require("cors");

//express application
const app = express();

//port env
const PORT = process.env.PORT;

//MIDDLEWARE
app.use(cors());
app.use(express.json());

//ROUTES
// const poemRouter = require("./routes/menu");
// app.use("/poem", poemRouter);

//LISTEN
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
