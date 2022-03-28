const express = require("express");

const router = express.Router();

const assignment = require("../controllers/assignments");

router.post("/add", assignment.setItem);
router.get("/get", assignment.getItems);

module.exports = router;
