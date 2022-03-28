const axios = require("axios");
const fcmServerHeader = require("../utils/config").fcmServerHeader;

exports.sendNotification = (clientToken, req, res, next, assetType) => {

  const reqBody = req.body;
  const wpn = {
    to: clientToken,
    notification: {
      title: reqBody.title,
      body:  `Hi, a new assignment  added For you.`,
      image: reqBody.imageUrl,
    },
    data: {
      url: "<url of media image>",
      dl: "<deeplink action on tap of notification>",
    },
  };

  axios
    .post("https://fcm.googleapis.com/fcm/send", wpn, {
      headers: fcmServerHeader,
    })
    .then(function (response) {
      console.log("API RESPONSE", response.status);
      if (response.status === 200) {
        console.log("Notification Sent successfully ");
      } else {
        console.log("Push notification sent failed..");
      }
    })
    .catch(function (error) {
      console.log("Push notification sent failed..", error);
    });
};
