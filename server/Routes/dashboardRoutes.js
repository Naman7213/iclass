const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();
const Student = require("../model/studentSchema");

router.get("/", async (req, res) => {
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

router.post("/", async (req, res) => {
  const { firstname, lastname, email, regno, age } = req.body;
  try {
    const findStudent = await Student.findOne({ regno: regno });
    if (findStudent) {
      return res.status(409).json({ message: "Student Already Exists" });
    } else {
      const newStudent = new Student({
        _id: mongoose.Types.ObjectId(),
        firstname: firstname,
        lastname: lastname,
        email: email,
        regno: regno,
        age: age,
      });
      const studentCreated = await newStudent.save();
      if (studentCreated) {
        return res.status(201).json({ message: "New Student Created" });
      } else {
        return res
          .status(500)
          .json({ message: "New Student not created, Please try again" });
      }
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Please try again, sorry for inconvinience" });
  }
});

module.exports = router;
