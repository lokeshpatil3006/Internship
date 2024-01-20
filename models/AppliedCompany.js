const mongoose = require("mongoose");
const appliedCompanySchema = new mongoose.Schema({
  studentId: {
    type: String,
    required: true,
    trim: true,
  },
  numberOFCompanies: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
  },
});
