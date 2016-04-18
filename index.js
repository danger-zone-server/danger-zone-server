// require Router and instantiate
var Router = require(__dirname + '/lib/router.js');
const headMessage = require(__dirname + '/lib/headMessage');
var router = new Router();

// require server and launch
exports.server = require('http').createServer(router.route()).listen(8888, () => {
  console.log('Server requesting flyby on Port: 8888');
});

// require and export all major js files
exports.Router = require(__dirname + '/lib/router.js');
exports.headMessage = require(__dirname + '/lib/headMessage.js');

router.get('/maverick', function(req, res) {
  headMessage(res, 200, 'text/plain', 'bonjour\n');
  return res.end()
})
