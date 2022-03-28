const mongoUrl =
  "mongodb+srv://ramusesan:08AUiBEnCQFGcXH6@web-notification.4en6m.mongodb.net/web-notification?retryWrites=true&w=majority";

const fcmServerHeader = {
  "Content-Type": "application/json",
  Authorization:
    "Bearer AAAAU-DrUF4:APA91bEAKGWXcrpiV2pQbzrn9zVuCkuezXLBVE35K666FtzO0o5LUQ5M-Txr_pw6ZsEs5a3qYnaHkBCqsyCl0PRKtClSCcbm9HUHEoY4HlTfGGhoO0LcoZycLYHPAebCW1lTUPO9TVKW",
};
exports.mongoUrl = mongoUrl;

exports.fcmServerHeader = fcmServerHeader;
