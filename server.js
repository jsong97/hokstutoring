const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const session = require('express-session');

const app = express();

// const config = require('./config/database');
var mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

var DB_URL = "mongodb://hokstutoring:1cabbage@ds159772.mlab.com:59772/youtubevideos";

mongoose.connect(DB_URL, { useNewUrlParser: true }, function(err){
  if (!err){
    console.log('Connected to mongo');
  } else {
    console.log('Failed to connect to mongo');
  }
});

let db = mongoose.connection;

db.once('open', function(){
  console.log('Connected to MongoDB');
})

// Express Validator Middleware
app.use(expressValidator({
  errorFormatter: function(param, msg, value){
    var namespace = param.split('.')
    , root = namepsace.shift()
    , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param: formParam,
      msg: msg,
      value: value
    };
  }
}));

// bring in models
let Video = require('./models/youtubeVideos');

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));


// get Reviews API
app.get('/api/reviews', (req, res) => {
  const reviews = [
    {id: 1, firstName: 'John', lastName: 'Doe', title: 'University Student',
    content: 'Hok is the bomb'},
    {id: 2, firstName: 'Sarah', lastName: 'Smith', title: 'VCE Student',
    content: 'I love Hok!'},
    {id: 3, firstName: 'Jack', lastName: 'Nguyen', title: 'Parent',
    content: 'The best tutoring service!'},
    {id: 3, firstName: 'Mary', lastName: 'Lim', title: 'Teacher',
    content: 'Hok was great for teaching my students!'},
  ];

  res.json(reviews);
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port ${port}`);
















///////////
