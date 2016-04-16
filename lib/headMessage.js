const fs = require('fs');
const http = require('http');

// define a function that checks status, content-type to determine the Header Message
// return res.end if its a 404
var headMessage = module.exports = exports = function(res, status, contentType, bodyMsg) {
  if (status.toString() !== '404' && contentType === 'text/plain' && Number.isInteger(status.toString())) {
    res.writeHead(status, {'Content-Type': contentType});
    res.write(bodyMsg);
  } else if (status.toString() !== '404' && contentType === 'application/json' && Number.isInteger(status.toString())) {
    res.writeHead(status, {'Content-Type': contentType});
    res.write(JSON.stringify({msg: bodyMsg}));
  } else if (status.toString() === '404' && contentType === 'text/plain') {
    res.writeHead(404, {'Content-Type': contentType});
    res.write(bodyMsg);
    return res.end();
  } else if (status.toString() === '404' && contentType === 'application/json') {
    res.writeHead(404, {'Content-Type': contentType});
    res.write(JSON.stringify({msg: bodyMsg}));
    return res.end();
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.write('Error during headMessage()');
    return res.end();
  }
};
