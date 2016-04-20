module.exports = exports = function headMessage(res, status, contentType, bodyMsg) {
if (status.toString() !== '404' && contentType === 'text/plain' || contentType === 'application/json') {
  res.writeHead(status, { 'Content-Type': contentType });
  if (contentType === 'text/plain') {
  res.write(bodyMsg);
  return res.end();
  }
  res.write(JSON.parse('{ "msg": "bodyMsg" }'));
  return res.end();
  }
};

// {
//   res.writeHead(404, { 'Content-Type': 'text/plain' });
//   res.write('Error during headMessage()');
//   return res.end();
// }
//
// (status.toString() === '404' && contentType === 'text/plain') {
//   res.writeHead(404, { 'Content-Type': contentType });
//   res.write(bodyMsg);
//   return res.end();
//
// (status.toString() === '404' && contentType === 'application/json') {
//   res.writeHead(404, { 'Content-Type': contentType });
//   res.write({ msg: bodyMsg });
//   return res.end();
