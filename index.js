// require Router and instantiate
var Router = require(__dirname + '/lib/router.js');
router = new Router();

// require server and launch
exports.server = require('http').createServer(router.route()).listen(3000);

// require and export all major js files
exports.Router = require(__dirname + '/lib/router.js');
exports.headMessage = require(__dirname + '/lib/headMessage.js');
