import Application from './lib/index';
import HelloController from './HelloController';
import nunjucks from 'nunjucks';
nunjucks.configure('/templates');
var app = new Application({
	'/{name*}': HelloController 
}, {
	target: 'body'
	}
);
app.start();
