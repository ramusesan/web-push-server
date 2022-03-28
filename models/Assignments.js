const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AssignmentsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  assetUrl: {
    type: String,
  },
  assetType: { type: String, required: true },
});

module.exports = mongoose.model("Assignments", AssignmentsSchema);
