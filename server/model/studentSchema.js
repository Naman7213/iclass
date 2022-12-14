const mongoose = require("mongoose");

const student_schema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  firstname: mongoose.Schema.Types.String,
  lastname: mongoose.Schema.Types.String,
  email: mongoose.Schema.Types.String,
  regno: mongoose.Schema.Types.Number,
  age: mongoose.Schema.Types.Number,
  presentDays: {
    type: Number,
    default: 0,
  },
  absentDays: {
    type: Number,
    default: 0,
  },
});

const Student = mongoose.model("Students", student_schema);
module.exports = Student;
