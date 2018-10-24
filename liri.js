

require("dotenv").config();

var Spotify = require("node-spotify-api");

var keys = require("./keys");

var request = require("request");

var moment = require('moment');
moment().format();

var fs = require("fs");

var spotify = new Spotify(keys.spotify);

var callSpotifyAPI = function(songName) {
  if (songName === undefined) {
    songName = "C.R.E.A.M.";
  }
  spotify.search(
    {
      type: "track",
      query: songName,
      limit: 1
    },
    function(err, data) {
      if (err) {
        console.log("Error occurred: " + err);
        return;
      }
      var songs = data.tracks.items;
      for (var i = 0; i < songs.length; i++) {
        console.log(i);
        console.log("Artist name: " + songs[i].artists[0].name);
        console.log("Song title: " + songs[i].name);
        console.log("Track number: " + songs[i].track_number);
        console.log("Album: " + songs[i].album.name);
        console.log("Release date: " + songs[i].album.release_date);
        console.log("Album type: " + songs[i].album.album_type);
        console.log("Preview song: " + songs[i].preview_url);
        console.log("----------------------------------------------------");
      }
    }
  );
};

var callOMDBAPI = function(movieName) {
  if (movieName === undefined) {
    movieName = "snakes on a plane";
  }
  var urlHit =
  "http://www.omdbapi.com/?t=" +
  movieName +
  "&y=&plot=full&tomatoes=true&apikey=trilogy";
  request(urlHit, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var jsonData = JSON.parse(body);
      console.log("Title: " + jsonData.Title);
      console.log("Year: " + jsonData.Year);
      console.log("Rated: " + jsonData.Rated);
      console.log("IMDB Rating: " + jsonData.imdbRating);
      console.log("Country: " + jsonData.Country);
      console.log("Language: " + jsonData.Language);
      console.log("Plot: " + jsonData.Plot);
      console.log("Actors: " + jsonData.Actors);
      console.log("Rotton Tomatoes Rating: " + jsonData.Ratings[1].Value);
    }
  });
};


var callBANDSAPI = function(artist) {
  if (artist === undefined) {
    artist = "Rakim";
  }
  var urlHit = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
  request(urlHit, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      console.log('body:', body);
      var data = JSON.parse(body);
      for (var i = 0; i < data.length; i++) {
      console.log("Lineup: " + data[i].lineup)
      console.log("Venue: " + data[i].venue.name);
       console.log("City: " + data[i].venue.city);
       console.log("Region: " + data[i].venue.region);
       console.log("Country: " + data[i].venue.country);
       console.log("Type: " + data[i].offers.type);
       console.log("status: " + data[i].offers.status);
       var date = data[i].datetime;
       var time = data[i].datetime;
       time = moment(time).format("h:mm a");
       date = moment(date).format("MM/DD/YYYY");
       console.log("concert starts at: " + date +"  " +  time)
       var sdate = data[i].on_sale_datetime;
       sdate = moment(sdate).format("MM/DD/YYYY");
       console.log("Sale started: "  + sdate)
    }
  }
});
};



var userCommand = function(caseData, functionData) {
  switch (caseData) {
  
    case "spotify-this-song":
    callSpotifyAPI(functionData);
    break;

    case "movie-this":
    callOMDBAPI(functionData);
    break;
      
      case "concert-this":
      callBANDSAPI(functionData);
      break;

    case "do-what-it-says":
    doWhatItSays();
    break;
    default:
    console.log("LIRI can't understand you!");
  }
};

var doWhatItSays = function () {
  fs.readFile('random.txt', 'utf8', function(error, data){
    console.log(data);
    var dataArr = data.split(',');
    if (dataArr.length ===  2) {
      userCommand(dataArr[0], dataArr[1]);
    } else if (dataArr.length === 1) {
      userCommand(dataArr[0]);
    }
  });
};

var cmdLnArgs = function(argOne, argTwo) {
  userCommand(argOne, argTwo);
};

cmdLnArgs(process.argv[2], process.argv[3]);
