const mongoose = require("mongoose");
const parentSchema = new mongoose.Schema({
  studentsRegNo: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
