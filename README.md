#About Danger Zone Server

DZS is a basic framework for creating an HTTP server with routes, to keep you out of the Danger Zone.  It allows you to easily write files and header messages upon request. Danger Zone Server also implements the following REST requests:

GET
POST
PUT
PATCH
DELETE

##Installation

```
npm install danger-zone-server
```
##Getting Started

DZS consists of an HTTP router and helpful methods that streamline writing response headers and expand options for writing data to a new file. Here is the simplest way to implement it:

To use Danger Zone Server, the user must require in the package, via npm.js.com.

```
var dzs = require('danger-zone-server');
```

##Custom Routes
The package simplifies route header generation by simply putting into the server code the path and the messages you need generated.

```
router.method(path, () => {
  headMessage(res, status, contentType, bodyMsg );
  return res.end();
});
```

For example, a GET request to /maverick would look like

```
router.get('/maverick', () => {
  headMessage(res, 200, 'text/plain', 'I feel the need...the need for speed')
  return res.end();
});
```
