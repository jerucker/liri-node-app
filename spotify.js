require("dotenv").config();

const keys = require("./keys.js");

// Required npm packages
var axios = require('axios');
const Spotify = require('node-spotify-api');
const chalk = require('chalk');

// collect arguments entered into terminal
const command = process.argv[2];
var spotify = new Spotify(keys.spotify);


spotify.search({
  type: 'track',
  query: 'All the Small Things',
  limit: 1,
}, 
function (err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
  console.log(data.tracks.items);
});