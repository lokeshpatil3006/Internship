const mongoose = require("mongoose");
const roundsSchema = new mongoose.Schema({
  noOfRounds: {
    type: String,
    require: true,
  },
  nameOfRounds: {
    type: String,
    required: true,
  },
  detailsOfRounds: {
    type: String,
    required: true,
  },
});
