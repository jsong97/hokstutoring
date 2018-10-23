var mongoose = require('mongoose');

var articleSchema = new mongoose.Schema(
  {
    "author": {type: String, required: true},
    "picture": {type: String, required: true},
    "title": {type: String, required: true},
    "description": {type: String, required: true}
  }
);

// the model is called Article
let Article = module.exports = mongoose.model('Article', articleSchema);
