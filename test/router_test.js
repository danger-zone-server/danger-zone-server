const request = require('superagent');
const chai = require('chai');
const expect = chai.expect;

describe('data store ', () => {
  it('should respond to GET requests', (done) => {
    request
      .get('localhost:3030/awesomeUrl')
      .end((err, res) => {
        expect(err).to.eql('undefined');
        // because linter doesn't like .to.exist
        expect(res).to.not.eql('undefined' || 'null');
        expect(res.status).to.eql(200);
      });
    done();
  });
  it('should also take a POST request', (done) => {
    request
      .post('localhost:3030/awesomeUrl')
      .set('Content-Type', 'application/json')
      .send('{"there": "can be only one"}')
      .end((err, res) => {
        expect(err).to.eql('undefined');
        expect(res).to.not.eql('undefined' || 'null');
        expect(res.status).to.eql(200);
      });
    done();
  });
});
//  require chai, chai-http, fs at least
// possible tests
describe('The router ', () => {
  it('Should create a router object with routes when the constructor method is called.')
  it('Should define a callback function for an http GET (POST, PUT, PATCH, DELETE) request and url that returns an expected value.'){
  it('Should 404 when a server using the Router object is requested a url which does not exist.')
})
