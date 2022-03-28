const express = require("express");
const path = require("path");
var bodyParser = require("body-parser");

const connectDB = require("./utils/database");

const fcmRouter = require("./routes/fcm");
const assignmentsRouter = require("./routes/assignments");

const app = express();

const PORT = 9000;
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

app.use("/assignment", assignmentsRouter);

app.use("/fcm", fcmRouter);

app.get("/", function (req, res) {
  res.render("pages/index", { users: [{ name: "All" }],  assets: [{ type: "Video" }, { type: "Image" }] });
});

app.use(express.static(path.join(__dirname, "/public")));

connectDB(app, PORT);