const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const request = chai.request;

// const fs = require('fs');

// dont forget, headMessage takes 4 parameters
// also, we want to open and close the server for each test
// instead of creating a test server within the test, it's created in its own file and required in
describe('headMessage tests', () => {
  beforeEach(function(done) {
    this.server = require(__dirname + '/headMessageTestServer');
    done();
  });
  // afterEach(function(done) {
  //   this.server.close();
  //   done();
  // });
  it('Should return a response in plain text.', (done) => {
    request('localhost:8888')
    .get('/textplaintest')
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res.status).to.eql(200);
      expect(res.text).to.eql('this here\'s some plain text ');
      done();
    });
  });
  it('Should return a response in JSON.', (done) => {
    request('localhost:8888')
    .get('/applicationjsontest')
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res.status).to.eql(200);
      expect(res.text).to.eql('{"msg":"y\'all got some bodacious parsed json"}');
      done();
    });
  });
  it('Should return a 404 response in plain text.', (done) => {
    request('localhost:8888')
    .get('/nosuchendpoint')
    .end((err, res) => {
      expect(err).to.not.eql(null);
      expect(res.status).to.eql(404);
      expect(res.text).to.eql('You\'ve lost that lovin\' feelin\'');
      done();
    });
  });
});
