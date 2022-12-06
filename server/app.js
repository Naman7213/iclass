require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
require("./DB/conn");
const Student = require("./model/studentSchema");

app.use(cors());

app.get("/", async (req, res) => {
  try {
    Student.find()
      .then((data) => {
        return res.status(200).json({ data });
      })
      .catch((err) => {
        return res.status(500).json({ err });
      });
  } catch {
    return res.status(200).json({ message: "error" });
  }
});

module.exports = app;
