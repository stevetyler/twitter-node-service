const express = require('express');
const twitterAuth = require('./auth');
const app = express();

const Twit = require('twit');
const Twitter = new Twit({
  consumer_key: twitterAuth.consumer_key,
  consumer_secret: twitterAuth.consumer_secret,
  access_token: twitterAuth.access_token,
  access_token_secret: twitterAuth.access_token_secret,
  timeout_ms: 60*1000  // optional HTTP request timeout to apply to all requests.
});


// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world');
});


const server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});
