require("dotenv").config();

var keys = require("./keys.js");

// npm apps
var axios = require('axios');
const chalk = require('chalk');


// collect arguments entered into terminal
var title = process.argv[2];

//  Axios is used to retrieve the information from the api

axios.get("http://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=3b0bf99&")
  .then(function (response) {
    
    var movieTitle=  "\nTitle: " + response.data.Title
    var movieData =
    "\nRelease Year: " + response.data.Year +
    "\nIMDB Rating: " + response.data.imdbRating +
    "\nLanguage: " + response.data.Language +
    "\nPlot: " + response.data.Plot +
    "\nActors: " + response.data.Actors
    console.log(chalk.black.bgWhite.bold(movieTitle));
    console.log(chalk.green(movieData));
    
  })
  .catch(function (error) {
    console.log(error);
  });

  

    