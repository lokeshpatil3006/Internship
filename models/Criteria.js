const mongoose = require("mongoose");
const criteriaSchema = new mongoose.Schema({
  criteria: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
  },
});
