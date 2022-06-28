const functions = require("firebase-functions");
const { geocodeRequest } = require("./geocode");
const { placesRequest } = require("./places");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
const { Client } = require("@googlemaps/google-maps-services-js");

const client = new Client({});

exports.geocode = functions.https.onRequest((request, response) => {
    geocodeRequest(request, response, client);
});

exports.placesNearby = functions.https.onRequest((request, response) => {
    placesRequest(request, response, client);
  });