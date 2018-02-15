const express = require('express');
const router = express.Router();
const twitter = require('../services/twitter');

/* GET user tweets for user id stevetyler_uk */
router.get('/', function(req, res, next) {
  return twitter.fetchUserTweets().then(data => {
    if (Array.isArray(data)) {
      data.length ? res.send(twitter.formatTweets(data)) : res.send('no tweets found');
    }
    else {
      throw new Error();
    }
  }).catch(err => {
    console.log(err);
    res.send('error fetching tweets');
  });
});

router.get('/post', function(req, res, next) {
  return twitter.postTweet().then(() => {
    res.send({});
  }).catch(err => {
    console.log(err);
    res.send('error posting tweet');
  });
});

module.exports = router;
