// Set port to default or the user inputed number
process.argv[2] = 8888;

// Require server and launch
exports.server = function(routerCall) {
    require('http').createServer(routerCall).listen(process.argv[2], () => {
    console.log('Server requesting flyby on Port: ' + process.argv[2]);
  });
};

// Require and export all major js files
exports.Router = require(__dirname + '/lib/router.js');
exports.headMessage = require(__dirname + '/lib/headMessage.js');
