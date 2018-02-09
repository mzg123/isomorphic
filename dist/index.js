'use strict';

var _hapi = require('hapi');

var _hapi2 = _interopRequireDefault(_hapi);

var _index = require('./lib/index');

var _index2 = _interopRequireDefault(_index);

var _HelloController = require('./HelloController');

var _HelloController2 = _interopRequireDefault(_HelloController);

var _nunjucks = require('nunjucks');

var _nunjucks2 = _interopRequireDefault(_nunjucks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_nunjucks2.default.configure('./dist');

var server = _hapi2.default.Server({
	host: 'localhost',
	port: 8000
});

var app = new _index2.default({
	'/test/{name*}': _HelloController2.default
}, { server: server,
	document: function document(application, controller, request, reply, body, callback) {
		var promise = new Promise(function (resolve, reject) {
			_nunjucks2.default.render('index.html', { body: body }, function (err, html) {
				if (err) {
					resolve(err);
				}
				resolve(html);
			});
		});
		return promise;
	}
});
app.start();