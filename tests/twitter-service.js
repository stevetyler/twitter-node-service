const app = require('../app');

const assert = require('assert');
const expect = require('chai').expect;
const twitter = require('../services/twitter');

describe('Twitter Service', () => {
  let tweetArr = [
    {
      "created_at": "Thu Feb 15 12:20:47 +0000 2018",
      "id": 964112249802645500,
      "id_str": "964112249802645504",
      "text": "test tweet",
      "truncated": false,
      "entities": {
        "hashtags": [],
        "symbols": [],
        "user_mentions": [],
        "urls": []
      },
      "source": "<a href=\"http://twitter-test.collated.net\" rel=\"nofollow\">Twitter Node Service</a>",
      "user": {
        "id": 234488146,
        "id_str": "234488146",
        "name": "Steve Tyler",
        "screen_name": "stevetyler_uk",
        "location": "London, England",
        "description": "Web Developer / Founder of Collated / EmberJS enthusiast / Stratford, London",
        "url": "https://t.co/cLwGbyqBxh",
        "protected": false,
        "followers_count": 168,
        "friends_count": 388,
        "listed_count": 9,
        "created_at": "Wed Jan 05 19:49:46 +0000 2011",
        "favourites_count": 3171,
        "utc_offset": 0,
        "time_zone": "London",
        "geo_enabled": false
      }
    },
  ];

  it('Formats tweets', () => {
    let data = twitter.formatTweets(tweetArr);

    assert.equal(data[0].hasOwnProperty('body'), true);
    assert.equal(data[0].hasOwnProperty('createdDate'), true);
    assert.equal(data[0].hasOwnProperty('author'), true);
    assert.equal(data[0]['body'], 'test tweet');
    assert.equal(data[0]['createdDate'], 'Thu Feb 15 12:20:47 +0000 2018');
    assert.equal(data[0]['author'], 'stevetyler_uk');
  });
});
