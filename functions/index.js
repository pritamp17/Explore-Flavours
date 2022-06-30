const functions = require("firebase-functions");
const { geocodeRequest } = require("./geocode");
const { placesRequest } = require("./places");
const { payRequest } = require("./pay");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

const stripeClient = require("stripe")(functions.config().stripe.key);

exports.geocode = functions.https.onRequest((request, response) => {
    geocodeRequest(request, response);
});

exports.placesNearby = functions.https.onRequest((request, response) => {
    placesRequest(request, response);
  });

  exports.pay = functions.https.onRequest((request, response) => {
    payRequest(request, response, stripeClient);
  });
   