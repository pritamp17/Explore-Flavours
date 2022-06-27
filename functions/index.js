const functions = require("firebase-functions");
const { geocodeRequest } = require("./geocode");
const { placesRequest } = require("./places");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.geocode = functions.https.onRequest((request, response) => {
    geocodeRequest(request, response);
});

exports.placesNearby = functions.https.onRequest((request, response) => {
    placesRequest(request, response);
  });