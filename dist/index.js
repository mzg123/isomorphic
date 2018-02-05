'use strict';

var _hapi = require('hapi');

var _hapi2 = _interopRequireDefault(_hapi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = _hapi2.default.Server({
	host: 'localhost',
	port: 8000
});
server.route({
	method: 'GET',
	path: '/hello',
	handler: function handler(request, reply) {
		return "hello work";
	}
});
server.route({
	method: 'GET',
	path: '/word',
	handler: function handler(request, reply) {
		return "my work";
	}
});

server.start();