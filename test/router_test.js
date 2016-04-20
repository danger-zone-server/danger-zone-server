const request = require('superagent');
const chai = require('chai');
const expect = chai.expect;
require('./test_server.js');

describe('The router ', () => {
  it('Should create a router object with routes when the constructor method is called.', (done) => {
      request
        .get('localhost:8989/')
        .end((err, res) => {
          expect(err).to.eql(null);
          expect(res).to.not.eql('undefined');
          expect(res.status).to.eql(200);
          done();
        });
    });
    it('Should take a POST route', (done) => {
      request
      .post('localhost:8989/')
      .set('Content-Type', 'application/json')
      .send('{"callsign": "Viper"}')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res.status).to.eql(200);
        done();
      });
    });
  it('Should 404 when url does not exist.', (done) => {
    request
      .get('localhost:8989/badroute')
      .end((err, res) => {
        expect(err).to.not.eql(null);
        expect(res.status).to.eql(404);
        done();
      });
  });
});
