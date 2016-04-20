const request = require('superagent');
const chai = require('chai');
const expect = chai.expect;
require('./test_server.js');

describe('headMessage tests', () => {
  it('Should return a response in plain text.', (done) => {
    request
    .get('localhost:8989/goodroute')
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res.status).to.eql(200);
      expect(res.text).to.eql('I feel the need...the need for speed');
      done();
    });
  });
  it('Should return a response in JSON.', (done) => {
    request
    .post('localhost:8989/goodbase')
    .set('Content-Type', 'application/json')
    .send('{"callsign": "Viper"}')
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res.status).to.eql(200);
      expect(res.text).to.eql('{"callsign": "Viper"}');
      done();
    });
  });
  it('Should return a 404 response in plain text.', (done) => {
    request
    .get('localhost:8989/nosuchendpoint')
    .end((err, res) => {
      expect(err).to.not.eql(null);
      expect(res.status).to.eql(404);
      expect(res.text).to.eql('You\'ve lost that lovin\' feelin\'\n');
      done();
    });
  });
});
