const mongoose = require("mongoose");
const ctcSchema = new mongoose.Schema({
  baseSalary: {
    type: Number,
    required: true,
  },
  bonuses: {
    type: Number,
  },
  allowances: {
    type: Number,
  },
});
module.exports = mongoose.model("ctc", ctcSchema);
