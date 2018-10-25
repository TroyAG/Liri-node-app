# LIRI Bot

### Overview

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data.

### what it can do

1. LIRI can display searched movie data concerts from your favorit artist and songs from spotify

2. To retrieve the data that will power this app, I utilized the Twitter, Spotify and OMDB APIs.

   * [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)
   * [Request](https://www.npmjs.com/package/request)
   * [OMDB API](http://www.omdbapi.com).
   * [DotEnv](https://www.npmjs.com/package/dotenv)

### Instructions

1. `node liri.js concert-this <artist name here>'`
(https://github.com/TroyAG/Liri-node-app/blob/master/photos/Capture2.PNG)
   * This will show you concerts from that artis in your terminal/bash window.

2. `node liri.js spotify-this-song '<song name here>'`
(https://github.com/TroyAG/Liri-node-app/blob/master/photos/Capture1.PNG)
   * This will show the following information about the song in your terminal/bash window
     
     * Artist(s)
     
     * The song's name
     
     * A preview link of the song from Spotify
     
     * The album that the song is from

3. `node liri.js movie-this '<movie name here>'`
(https://github.com/TroyAG/Liri-node-app/blob/master/photos/Capture.PNG)
   * This will output the following information to your terminal/bash window:

     ```
       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.
     ```

4. `node liri.js do-what-it-says`
   (https://github.com/TroyAG/Liri-node-app/blob/master/photos/Capture3.PNG)
   * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
     
     * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
     
     * Feel free to change the text in that document to test out the feature for other commands.
