const request = require('superagent');
const chai = require('chai');
const expect = chai.expect;
require('chai-http');

describe('The router ', () => {
  it('Should create a router object with routes when the constructor method is called.', (done) => {
      request
        .get('localhost:8888/')
        .end((err, res) => {
          expect(err).to.eql('undefined');
          // because linter doesn't like .to.exist
          expect(res).to.not.eql('undefined');
          expect(res.status).to.eql(200);
        });
      done();
    });
  it('Should 404 when url does not exist.', (done) => {
    request
      .get('localhost:8888/towerFlyby')
      .end((err, res) => {
        expect(err).to.eql('undefined');
        expect(res.status).to.eql(404);
        if (err && err.status === 404) {
          process.stdout.write('Negative Ghostrider... ' + res.body.message);
        }
      });
    done();
  });
});
