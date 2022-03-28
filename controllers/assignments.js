const Assignment = require("../models/Assignments");

const fcmMessageController = require("./fcm-message");

exports.setItem = (req, res, next) => {
  const reqBody = req.body;
  console.log(">>>>>>", reqBody)
  const assignment = new Assignment({
    title: reqBody.title,
    body: reqBody.body,
    assetUrl: reqBody.assetUrl,
    assetType: reqBody.asset_type,
  });
  assignment
    .save()
    .then((assignment) => {
      fcmMessageController.sendNotification(req, res, next, reqBody.asset_type);
      res.send({ body: "Assignment created Successfully." });
    })
  
    .catch((err) => {
      console.log(err);
      res.send({ body: "update failed", statusCode: 500 });
    });
};

exports.getItems = (req, res, next) => {
  Assignment.find()
    .then((assignments) => {
      res.send({ data: assignments, statusCode: 200 });
    })
    .catch((err) => {
      console.log(err);
      res.send({ body: "Assignments fetching failed", statusCode: 404 });
    });
};
