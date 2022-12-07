require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
require("./DB/conn");
const dashboardRoutes = require("./Routes/dashboardRoutes");
const bodyParser = require("body-parser");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/dashboard", dashboardRoutes);

module.exports = app;
