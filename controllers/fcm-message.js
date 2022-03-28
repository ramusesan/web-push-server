const FCM = require("../models/fcm");

const fcmUtil = require("../utils/fcm");

exports.sendNotification = (req, res, next) => {
  return  FCM.find()
    .then((products) => {
      const clientTokens = [];

      if (products && products.length > 0) {
        products.forEach((element) => {
          fcmUtil.sendNotification(element.fcm_token, req, res, next);
          clientTokens.push(clientTokens);
        });
      }
    })
    .catch((err) => {
      res.send({ body: "fetching  failed", statusCode: 404 });
    });
};
