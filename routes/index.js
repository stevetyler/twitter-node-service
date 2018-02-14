const express = require('express');
const router = express.Router();
const twitter = require('../services/twitter');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/:id', async function(req, res, next) {

  return twitter.fetchUserTweets(req.params.id).then(data => {
    res.send(twitter.formatTweets(data));
  });
});


module.exports = router;
