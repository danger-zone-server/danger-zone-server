const http = require('http');
​
const Router = require(__dirname + '/lib/router');
​
var routes = new Router();
routes.get('/maverick', function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.write('Hey Yo!');
  res.end();
});
