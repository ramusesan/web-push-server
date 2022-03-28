const mongoose = require("mongoose");
const mongoUrl = require("./config").mongoUrl;

const connectDB = (app, PORT) => {
  mongoose
    .connect(mongoUrl)
    .then((result) => {
      console.log("||| Database connected Successfully... |||");
      app.listen(PORT);
    })
    .catch((err) => {
      console.log("Database connected failed");
      console.log(err);
    });
};

module.exports = connectDB;
