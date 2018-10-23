const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const session = require('express-session');

const nodemailer = require('nodemailer');
const creds = require('./config/emailConfig');

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
let Video = require('./models/video');
let Article = require('./models/article');

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// get Video API
app.get('/api/video', (req, res) => {
  Video.find({}, function(err, videos){
    if(err){
      console.log(err);
    } else {
      res.json(videos);
    }
  });
});

// get Articles API
app.get('/api/article', (req, res) => {
  Article.find({}, function(err, articles){
    if(err){
      console.log(err);
    } else {
      res.json(articles);
    }
  });
});

app.post('/addVideo', function(req, res){
  const name = req.body.name;
  const picture = req.body.picture;
  const chapter = req.body.chapter;
  const question = req.body.question;
  const link = req.body.link;
  // const description = req.body.description;
  //const file = req.body.picture;

  req.checkBody('name', 'Name is required').notEmpty();
  req.checkBody('picture', 'Picture is required').notEmpty();
  req.checkBody('chapter', 'Chapter is required').notEmpty();
  req.checkBody('question', 'Question is required').notEmpty();
  req.checkBody('link', 'Link is required').notEmpty();
  console.log("checkBody worked");

  let errors = req.validationErrors();
  if (errors){
    console.log(errors);
  } else {
    let newVideo = new Video({
      name:name,
      picture:picture,
      chapter:chapter,
      question:question,
      link:link
    });
    newVideo.save(function(err){
      if(err){
        console.log(err);
        return;
      } else {
        let pathredir = '/addVideo';
        res.redirect(pathredir);
      }
    });
  }
});

// add Articles
app.post('/addArticle', function(req, res){
  const author = req.body.author;
  const picture = req.body.picture;
  const title = req.body.title;
  const description = req.body.description;

  req.checkBody('author', 'Author is required').notEmpty();
  req.checkBody('picture', 'Picture is required').notEmpty();
  req.checkBody('title', 'Title is required').notEmpty();
  req.checkBody('description', 'Description is required').notEmpty();

  let errors = req.validationErrors();
  if (errors){
    console.log(errors);
  } else {
    let newArticle = new Article({
      author:author,
      picture:picture,
      title:title,
      description:description
    });
    newArticle.save(function(err){
      if(err){
        console.log(err);
        return;
      } else {
        let pathredir = '/addArticle';
        res.redirect(pathredir);
      }
    });
  }
});


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

// All the email transporting stuff
var transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

var transporter = nodemailer.createTransport(transport);
transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

// for contact
app.post('/Contact', (req, res, next) => {
  var name = req.body.name;
  var email = req.body.email;
  var phone = req.body.phone;
  var message = req.body.message;
  var content = `name: ${name} \n email: ${email} \n phone: ${phone} \n message: ${message} `;

  var mail = {
    from: name,
    to: 'jsong843@gmail.com',  //Change to email address that you want to receive messages on
    subject: 'HoksTutoring: Message',
    text: content
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      });
    }
  });
});

// for signups
app.post('/SignUp', (req, res, next) => {
  var name = req.body.name;
  var email = req.body.email;
  var phone = req.body.phone;
  var yearlvl = req.body.yearlvl;
  var address = req.body.address;
  var interest = req.body.interest;
  var content = `name: ${name} \n email: ${email} \n phone: ${phone} \n year level: ${yearlvl} \n address: ${address} \n interest: ${interest} `;

  var mail = {
    from: name,
    to: 'jsong843@gmail.com',  //Change to email address that you want to receive messages on
    subject: 'HoksTutoring: New Student',
    text: content
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      });
    }
  });
});

// for newsletter
app.post('/HomePage', (req, res, next) => {
  var email = req.body.email;
  var content = `email: ${email} has signed up to your newsletter`;

  var mail = {
    from: email,
    to: 'jsong843@gmail.com',  //Change to email address that you want to receive messages on
    subject: 'HoksTutoring: Newsletter Signup',
    text: content
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      });
    }
  });
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port ${port}`);
















///////////
