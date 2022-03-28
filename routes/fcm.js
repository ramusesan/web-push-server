const express = require("express");


const fcmClientController = require("../controllers/fcm-clients");

const router = express.Router();

// router.post("/add", fcmController.sendNotification);

router.post("/clients/add", fcmClientController.addClients);
router.get("/clients/get", fcmClientController.getClients);




module.exports = router;
