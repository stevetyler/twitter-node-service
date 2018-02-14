const app = require('../app');
const http = require('http');
const request = require('superagent');
const assert = require('assert');
const expect = require('chai').expect;

describe('API', () => {
  let server;
  let port = 3001;

  before(async() => {
    app.set('port', port);
    server = http.createServer(app);
    server.listen(port);
  });

  after(() => {
    server.close();
  });

  it('Launches', async () => {
    const res = await request(`http://localhost:${port}/`);
    assert.equal(res.status, 200);
  });

  it('Fetches user tweets', async () => {
    const res = await request(`http://localhost:${port}/stevetyler_uk`);
    assert.equal(res.status, 200);
    expect(res.body).to.be.an('array');
  });

  it('Displays each tweet with 3 fields: body, createdDate and author', async () => {
    const res = await request(`http://localhost:${port}/stevetyler_uk`);

    assert.equal(res.status, 200);
    assert.equal(Object.keys(res.body[0]).length, 3, '3 fields shown for tweet');
    assert.equal(res.body[0].hasOwnProperty('body'), true, 'body field exists');
    assert.equal(res.body[0].hasOwnProperty('createdDate'), true, 'createdDate field exists');
    assert.equal(res.body[0].hasOwnProperty('author'), true, 'author field exists');
  });


  it('Posts new tweet to stevetyler_uk account', async () => {
    await request(`http://localhost:${port}/post`);
    assert.equal(res.status, 200);
  });
});
