const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  middleName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  branch: {
    type: String,
    required: true,
    trim: true,
  },
  prnNumber: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  registrationNumber: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  linkedInProfile: {
    type: String,
    trim: true,
  },
  tenthPercentAttachment: {
    type: String,
    required: true,
  },
  twelfthPercentAttachment: {
    type: String,
    required: true,
  },
  aggregateCGPAAttachment: {
    type: String,
    required: true,
  },

  adharNo: {
    type: String,
    required: true,
    unique: true,
  },
  passportAttachment: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },

  profilePhoto: {
    required: true,
    type: String,
  },
  gender: {
    type: String,
    required: true,
  },
  disability: {
    required: true,
    type: String,
  },

  amcat: {
    elqScore: {
      required: true,
      type: Number,
    },
    autometaScore: {
      required: true,
      type: Number,
    },
    accountType: {
      type: String,
      enum: ["Admin", "Student", "Instructor"],
      required: true,
    },
    resetPasswordExpires: {
      type: Date,
    },
    token: {
      type: String,
    },
  },
});
module.exports = mongoose.model("user", userSchema);
