const http = require('http');
const Router = require(__dirname + '/router');

var router = new Router();

router.get('/maverick', (req, res) => {
  headMessage(res, 200, 'text/plain', 'I feel the need for speeed');
});
