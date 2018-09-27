// Create the database
var mongoose = require('mongoose');
var videoSchema = require('../models/youtubeVideos.js');

// convert this into an environment variable
// var DB_URL = process.env.
var DB_URL = 'mongodb://hokstutoring:1cabbages@ds159772.mlab.com:59772/youtubevideos';

mongoose.connect(DB_URL, { useNewUrlParser: true }, function(err){
  if (!err){
    console.log('Connected to mongo');
  } else {
    console.log('Failed to connect to mongo');
    console.log("this is the password: ");
    console.log(process.env.MONGO_ATLAS_PW);
  }
});

module.exports = {
  database: DB_URL,
  secret: 'yoursecret'
}
