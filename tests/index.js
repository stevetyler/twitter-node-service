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
    let res = await request(`http://localhost:${port}/`);
    assert.equal(res.status, 200);
  });

  it('Fetches user tweets', async () => {
    let res = await request(`http://localhost:${port}/`);
    assert.equal(res.status, 200);
    expect(res.body).to.be.an('array');
  });

  it('Displays each tweet with 3 fields: body, createdDate and author', async () => {
    let res = await request(`http://localhost:${port}/`);
    assert.equal(res.status, 200);
    assert.equal(Object.keys(res.body[0]).length, 3);
    assert.equal(res.body[0].hasOwnProperty('body'), true);
    assert.equal(res.body[0].hasOwnProperty('createdDate'), true);
    assert.equal(res.body[0].hasOwnProperty('author'), true);
  });

  it('Posts new tweet to user account', async () => {
    let res = await request(`http://localhost:${port}/post`);
    assert.equal(res.status, 200);
  });
});
