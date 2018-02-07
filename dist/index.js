'use strict';

var _hapi = require('hapi');

var _hapi2 = _interopRequireDefault(_hapi);

var _index = require('./lib/index');

var _index2 = _interopRequireDefault(_index);

var _controller = require('./lib/controller');

var _controller2 = _interopRequireDefault(_controller);

var _nunjucks = require('nunjucks');

var _nunjucks2 = _interopRequireDefault(_nunjucks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_nunjucks2.default.configure('./dist');

var server = _hapi2.default.Server({
  host: 'localhost',
  port: 8000
});

function getName(request) {
  var name = {
    fname: 'M',
    lname: 'zg'
  };

  var nameParts = request.params.name ? request.params.name.split('/') : [];
  name.fname = nameParts[0] || request.query.fname || name.fname;
  name.lname = nameParts[1] || request.query.lname || name.lname;
  return name;
}
var app = new _index2.default({
  '/test/{name*}': _controller2.default
}, { server: server });
app.start();