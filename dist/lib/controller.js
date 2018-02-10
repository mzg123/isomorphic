'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _nunjucks = require('nunjucks');

var _nunjucks2 = _interopRequireDefault(_nunjucks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

_nunjucks2.default.configure('../dist');

var Controller = function () {
	function Controller(context) {
		_classCallCheck(this, Controller);

		this.context = context;
	}

	_createClass(Controller, [{
		key: 'index',
		value: function index(application, request, reply) {
			var promise = new Promise(function (resolve, reject) {
				resolve();
			});
			return promise;
		}
	}, {
		key: 'toString',
		value: function toString(request, rcallback) {
			callback(null, 'success');
		}
	}, {
		key: 'render',
		value: function render(target, callback) {
			this.toString(function (err, body) {
				if (err) {
					return callback(err, null);
				}
			}).then(function (body) {
				document.querySelector(target).innerHTML = body;
				callback(null, body);
			});
		}
	}]);

	return Controller;
}();

exports.default = Controller;