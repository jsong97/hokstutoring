var mongoose = require('mongoose');

var videoSchema = new mongoose.Schema(
  {
    "name": {type: String, required: true},
    "picture": {type: String, required: true},
    "chapter": {type: String, required: true},
    "question": {type: String, required: true},
    "link": {type: String, required: true}
  }
);

// the model is called Project
let Video = module.exports = mongoose.model('Video', videoSchema);
