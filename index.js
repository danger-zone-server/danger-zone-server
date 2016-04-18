// Require server and launch
var PORT = 8888;
if (process.argv[2]) {
  PORT = process.argv[2]
}

exports.server = function(routerCall) {
    require('http').createServer(routerCall).listen(PORT, () => {
    console.log('Server requesting flyby on Port: ' + PORT);
  });
};

// Require and export all major js files
exports.Router = require(__dirname + '/lib/router.js');
exports.headMessage = require(__dirname + '/lib/headMessage.js');
