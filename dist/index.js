'use strict';

var _index = require('./lib/index');

var _index2 = _interopRequireDefault(_index);

var _HelloController = require('./HelloController');

var _HelloController2 = _interopRequireDefault(_HelloController);

var _nunjucks = require('nunjucks');

var _nunjucks2 = _interopRequireDefault(_nunjucks);

var _options = require('./options');

var _options2 = _interopRequireDefault(_options);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_nunjucks2.default.configure(_options2.default.nunjucks);

var app = new _index2.default({
	'/{name*}': _HelloController2.default
}, _options2.default);
app.start();