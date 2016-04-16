const http = require('http');
const Router = require(__dirname + '/router');
var router = new Router();

router.get('/maverick', (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.write('Hey Yo!');
  res.end();
});


http.createServer(router.route()).listen(3000, () => {
  console.log('Listening on Port: 3000');
});
