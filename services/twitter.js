const twitterAuth = require('../auth');
const Twit = require('twit');
const client = new Twit({
  consumer_key: twitterAuth.consumer_key,
  consumer_secret: twitterAuth.consumer_secret,
  app_only_auth: true,
  timeout_ms: 60*1000  // optional HTTP request timeout to apply to all requests.
});

exports.fetchUserTweets = async (user_id) => {
  const params = {
    user_id: user_id,
  };
  let tweets = await client.get('statuses/user_timeline', params);

  return tweets.data;
}

exports.formatTweets = (data) => {
  return data.map(tweet => formatTweet(tweet));
}

exports.postTweet = async () => {
  const params = {
    'status': 'test tweet'
  }
  await client.post('statuses/update', params);
}

function formatTweet(tweet) {
  return {
    body: tweet.text,
    createdDate: tweet.created_at,
    author: tweet.user.screen_name
  }
}
