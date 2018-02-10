'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _path2 = require('path');

var _path3 = _interopRequireDefault(_path2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var APP_FILE_PATH = '/application.js';

var Application = function () {
	function Application(routes, options) {
		_classCallCheck(this, Application);

		this.server = options.server;
		this.document = options.document;
		this.registerRoutes(routes);
	}

	_createClass(Application, [{
		key: 'registerRoutes',
		value: function registerRoutes(routes) {
			for (var _path in routes) {
				this.addRoutes(_path, routes[_path]);
			}
		}
	}, {
		key: 'addRoutes',
		value: function addRoutes(path, Controller) {
			var _this = this;

			var document = this.document;
			this.server.route({
				path: path,
				method: 'GET',
				handler: function handler(request, reply) {
					var controller = new Controller({
						query: request.query,
						params: request.params
					});
					return controller.index(_this, request, reply).then(function () {
						return controller.toString(request, function (err) {
							if (err) {
								return 'err';
							}
						});
					}).then(function (body) {
						return document(_this, controller, request, reply, body, null);
					}).then(function (html) {
						reply(html);
					});
				}
			});
		}
	}, {
		key: 'start',
		value: function start() {
			var _this2 = this;

			this.server.register(require('inert'), function (err) {

				if (err) {
					throw err;
				}

				_this2.server.route({
					method: 'GET',
					path: '/picture.jpg',
					handler: function handler(request, reply) {
						reply.file('/path/to/picture.jpg');
					}
				});

				_this2.server.start(function (err) {

					if (err) {
						throw err;
					}

					console.log('Server running at:', _this2.server.info.uri);
				});
			});
			//this.server.start();
		}
	}]);

	return Application;
}();

exports.default = Application;