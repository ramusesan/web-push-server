const FCM = require("../models/fcm");

const updateToken = (token) => {
  let tkns = new FCM({
    fcm_token: token,
  });

  return tkns.save();
};
exports.addClients = (req, res, next) => {
  if (!req.body || !req.body.fcm_token) {
    res.send({ body: "fcm_token is mandatory", statusCode: 500 });
  } else if (req.body && req.body.fcm_token) {
    FCM.find()
      .then((res) => {
        if (res && res.length > 0) {
          let founded = false;
          for (const element of res) {
            if (element.fcm_token === req.body.fcm_token) {
              founded = true;
              break;
            }
          }

          if (founded) {
            throw new Error(" tokens  already found..");
          } else {
            return updateToken(req.body.fcm_token);
          }
        } else {
          console.log("No tokens found on DB");
          return updateToken(req.body.fcm_token);
        }
      })

      .then((products) => {
        res.send({ body: "fcm token saved successfully.", statusCode: 200 });
      })
      .catch((err) => {
        console.log(err);
        res.send({ body: "fcm token saved  failed", statusCode: 500 });
      });
  }
};

exports.getClients = (req, res, next) => {
  FCM.find()
    .then((tokens) => {
      res.send({ data: tokens, statusCode: 200 });
    })
    .catch((err) => {
      console.log(err);
      res.send({ body: "fcm tokens fetching  failed", statusCode: 404 });
    });
};
