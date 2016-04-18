#About Danger Zone Server

DZS is a basic framework for creating an HTTP server with routes, to keep you out of the Danger Zone.  It allows you to easily write files and header messages upon request. Danger Zone Server also implements the following REST requests:

* GET
* POST
* PUT
* PATCH
* DELETE

##Installation

Initialize your repository.
```
npm init
```
Then do:

```
npm install --save-dev danger-zone-server
```

after installing danger-zone-server the user must then download all dev Dependencies

```
npm install
```

##Getting Started

DZS consists of an HTTP router and helpful methods that streamline writing response headers. Here is the simplest way to implement it:

To use Danger Zone Server, the user must require in the package in your route project directory.

```
var dzs = require('danger-zone-server');
var router = new dzs.Router();
```

##Custom Routes
The package simplifies route header generation by simply putting into the server code the path and the messages you need generated.

```
router.method(path, (req, res) => {
  headMessage(res, status, contentType, bodyMsg );
  return res.end();
});
```

For example, a GET request to /maverick would look like

```
router.get('/goose', function(req, res) {
  dzs.headMessage(res, '200', 'text/plain', 'I feel the need...the need for speeeeeed')
  return res.end();
  });

  const server = dzs.server(router.route());
```
