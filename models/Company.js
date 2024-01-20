const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  nameOfCompany: {
    type: String,
    required: true,
  },
  cgpa: {
    type: Number,
    required: true,
    min: 0.0,
    max: 10.0,
  },
  tenthCriteria: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  twelfthCriteria: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  backlog: {
    type: String,
    enum: ["Active", "Passive"],
    require: true,
  },

  disabilityCriteria: {
    type: String,
  },

  // AMCAT Exam Criteria
  amcatCriteria: {
    elqScore: {
      type: Number,
    },
    autometaScore: {
      type: Number,
    },
  },

  // Job Details
  roleDescription: {
    type: String,
    required: true,
  },
  jobLocation: {
    type: String,
    required: true,
  },

  // Salary Offered
  salaryOffered: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Salary",
  },
});
module.exports = mongoose.model("company", companySchema);
