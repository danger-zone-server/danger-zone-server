const Router = require(__dirname + '/../lib/router');
const http = require('http');
const fs = require('fs');
var headMessage = require(__dirname + '/../lib/headMessage');

var router =  new Router();

// this is for the plain text non-404 test
router.get('/textplaintest', () => {
  headMessage(res, 200, 'text/plain', 'this here\'s some plain text ');
  return res.end();
});

// this is for the application json non-404 test
router.get('/applicationjsontest', () => {
  headMessage(res, 200, 'application/json', 'y\'all got some bodacious parsed json');
  return res.end();
});

// this is for the POST test
// we create some sequential files and post them to an endpoint
var requestCount = 0;
router.post('/data/', function(req, res) => {
  var requestFile = '/../data' + ++requestCount + '.json';
  var filestream = fs.createWriteStream(__dirname + requestFile);
  var resBody = '';
  req.pipe(filestream);
  req.on('data', (chunk) => resBody += chunk);
  req.on('end', () => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello, ' + (JSON.parse(resBody).name));
    return res.end();
  });
});

// now we instantiate and export the server
var server = http.createServer(router.route());
module.exports = exports = server.listen(8888);
