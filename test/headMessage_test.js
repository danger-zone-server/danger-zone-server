const chai = require('chai');
const expect = require('chai').expect;
const request =  require('chai').request;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const fs = require('fs');

// dont forget, headMessage takes 4 parameters
// also, we want to open and close the server for each test
describe('headMessage tests'), () => {
  beforeEach(function(done) {
    this.server = require(__dirname + 'headMessageTestServer'); // I need to create this
    done();
  });
  after(function(done) {
    this.server.close();
  });


// lets make the following tests for responses

  it('Should return a response in plain text.')
  it('Should return a response in JSON.')
  it('Should return a 404 response in plain text.')

}; // don't kill these, they are the brackets for the describe block
