module.exports = exports = function headMessage(res, status, contentType, bodyMsg) {
  if (status.toString() !== '404' && contentType === 'text/plain') {
    res.writeHead(status, { 'Content-Type': contentType });
    res.write(bodyMsg);
  } else if (status.toString() !== '404' && contentType === 'application/json') {
    res.writeHead(status, { 'Content-Type': contentType });
    res.write(JSON.stringify({ msg: bodyMsg }));
  } else if (status.toString() === '404' && contentType === 'text/plain') {
    res.writeHead(404, { 'Content-Type': contentType });
    res.write(bodyMsg);
    return res.end();
  } else if (status.toString() === '404' && contentType === 'application/json') {
    res.writeHead(404, { 'Content-Type': contentType });
    res.write(JSON.stringify({ msg: bodyMsg }));
    return res.end();
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('Error during headMessage()');
    return res.end();
  }
};
