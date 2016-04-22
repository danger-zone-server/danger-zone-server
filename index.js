const httpServer = require('http');

var PORT = 3000;
if (process.argv[2]) {
  PORT = process.argv[2];
}

// Require server and launch
exports.server = function(routerCall) {
    httpServer.createServer(routerCall).listen(PORT, () => {
    console.log('Server requesting flyby on Port: ' + PORT);
  });
};

// Require and export all major js files
exports.Router = require(__dirname + '/lib/router');
exports.headMessage = require(__dirname + '/lib/headMessage');
