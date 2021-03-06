'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _controller = require('./lib/controller');

var _controller2 = _interopRequireDefault(_controller);

var _nunjucks = require('nunjucks');

var _nunjucks2 = _interopRequireDefault(_nunjucks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_nunjucks2.default.configure('../dist');

var HelloController = function (_Controller) {
	_inherits(HelloController, _Controller);

	function HelloController() {
		_classCallCheck(this, HelloController);

		return _possibleConstructorReturn(this, (HelloController.__proto__ || Object.getPrototypeOf(HelloController)).apply(this, arguments));
	}

	_createClass(HelloController, [{
		key: 'getName',
		value: function getName(context) {
			var name = {
				fname: 'M',
				lname: 'zg'
			};

			var nameParts = context.params.name ? context.params.name.split('/') : [];
			name.fname = nameParts[0] || request.query.fname || name.fname;
			name.lname = nameParts[1] || request.query.lname || name.lname;
			return name;
		}
	}, {
		key: 'toString',
		value: function toString(request, callback) {
			var context = this.context;
			var getName = this.getName;
			var promise = new Promise(function (resolve, reject) {
				_nunjucks2.default.render('./template/hello.html', getName(context), function (err, html) {
					if (err) {
						resolve(err);
					}
					resolve(html);
				});
			});
			return promise;
		}
	}]);

	return HelloController;
}(_controller2.default);

exports.default = HelloController;