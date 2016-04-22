var newTest = require('http');
var Router = require(__dirname + '/../lib/router.js');
var headMessage = require(__dirname + '/../lib/headMessage.js');
var PORT = 8989;
var router = new Router();

newTest.createServer(router.route()).listen(PORT, () => {
  console.log('Server requesting flyby on Port: ' + PORT);
});

router.get('/', (req, res) => {
  headMessage(res, '200', 'text/plain', 'Punch it');
  return res.end();
});

router.get('/goodroute', (req, res) => {
  headMessage(res, '200', 'text/plain', 'I feel the need...the need for speed');
  return res.end();
  });

router.post('/', (req, res) => {
  headMessage(res, '200', 'text/plain', 'Charlie');
  return res.end();
});

router.post('/goodbase', (req, res) => {
  headMessage(res, '200', 'application/json', '{"callsign": "Viper"}');
  return res.end();
});
