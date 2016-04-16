const Router = module.exports = exports = function() {
  this.routes = {
    'GET': {},
    'POST': {},
    'PUT': {},
    'PATCH': {},
    'DELETE': {}
  };
};


Router.prototype.get = function(routeName, cb) {
  this.routes.GET[routeName] = cb;
};

Router.prototype.post = function(routeName, cb) {
  this.routes.POST[routeName] = cb;
};

Router.prototype.put = function(routeName, cb) {
  this.routes.PUT[routeName] = cb;
};

Router.prototype.patch = function(routeName, cb) {
  this.routes.PATCH[routeName] = cb;
};

Router.prototype.delete = function(routeName, cb) {
  this.routes.DELETE[routeName] = cb;
};

Router.prototype.route = function() {
  var routes = this.routes;
  return function(req, res) {
    if (typeof routes[req.method][req.url] === 'function') {
      return routes[req.method][req.url](req, res);
    }
    res.writeHead(404);
    res.write('not found');
    res.end();
  };
};
