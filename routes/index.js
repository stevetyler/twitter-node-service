const express = require('express');
const router = express.Router();
const twitter = require('../services/twitter');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/:id', async function(req, res, next) {

  twitter.fetchUserTweets(req.params.id);

  res.send('hello');
});


module.exports = router;
