'use strict';

var _hapi = require('hapi');

var _hapi2 = _interopRequireDefault(_hapi);

var _nunjucks = require('nunjucks');

var _nunjucks2 = _interopRequireDefault(_nunjucks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_nunjucks2.default.configure('./dist');

var server = _hapi2.default.Server({
	host: 'localhost',
	port: 8000
});
server.route({
	method: 'GET',
	path: '/hello',
	handler: function handler(request, reply) {
		return 'Hello, world!';
	}
});
server.route({
	method: 'GET',
	path: '/word',
	handler: function handler(request, h) {
		var promise1 = new Promise(function (resolve, reject) {
			_nunjucks2.default.render('index.html', {
				fname: 'Miao', lname: 'zg'
			}, function (err, html) {
				resolve(html);
			});
		});
		return promise1;
	}
});

server.start();