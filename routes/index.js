const express = require('express');
const router = express.Router();
const twitter = require('../services/twitter');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/post', async function(req, res, next) {
  console.log('post called');
  return twitter.postTweet().then(() => {
    res.send('Tweet posted');
  }).catch(err => {
    res.send(err);
  });
});

router.get('/:id', async function(req, res, next) {

  return twitter.fetchUserTweets(req.params.id).then(data => {
    res.send(twitter.formatTweets(data));
  });
});

module.exports = router;
