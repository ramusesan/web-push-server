const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const fcmSchema = new Schema({
  fcm_token: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("fcm", fcmSchema);
