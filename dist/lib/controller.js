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
		value: function index(application, request, reply, callback) {
			var getName = this.getName;
			var promise = new Promise(function (resolve, reject) {
				_nunjucks2.default.render('index.html', getName(request), function (err, html) {
					resolve(html);
				});
			});
			return promise;
		}
	}, {
		key: 'toString',
		value: function toString(rcallback) {
			return "333";
		}
	}, {
		key: 'getName',
		value: function getName(request) {
			var name = {
				fname: 'M',
				lname: 'zg'
			};

			var nameParts = request.params.name ? request.params.name.split('/') : [];
			name.fname = nameParts[0] || request.query.fname || name.fname;
			name.lname = nameParts[1] || request.query.lname || name.lname;
			return name;
		}
	}]);

	return Controller;
}();

exports.default = Controller;