const twitterAuth = require('../auth');
const Twit = require('twit');
const client = new Twit({
  consumer_key: twitterAuth.consumer_key,
  consumer_secret: twitterAuth.consumer_secret,
  app_only_auth: true,
  // access_token: twitterAuth.access_token,
  // access_token_secret: twitterAuth.access_token_secret,
  timeout_ms: 60*1000  // optional HTTP request timeout to apply to all requests.
});


exports.fetchUserTweets = async (user_id) => {
  const params = {
    user_id: user_id,
  };

  let tweets = await client.get('statuses/user_timeline', params);

  console.log(tweets);

}
