require("dotenv").config();

var keys = require("./keys.js");

// npm apps
var axios = require('axios');
const chalk = require('chalk');

// collect arguments entered into terminal
var artist = process.argv[2];

//  Axios is used to retrieve the information from the api

axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
  .then(function (response) {
    console.log(response.venue);
  })
  .catch(function (error) {
    console.log(error);
  });