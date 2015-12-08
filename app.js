var config = require('./config/config');
var routes = require('./config/routes');

var Hapi = require('hapi');
var server = new Hapi.Server();

server.connection(config.server);
server.route(routes);

server.start(function () {
  console.log('Server running at:', server.info.uri);
});
