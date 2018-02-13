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
    //assert body is array
    //shouldExist('array')
    expect(res.body).to.be.an('array');
  });
});
