import Application from './lib/index';
import HelloController from './HelloController';
import nunjucks from 'nunjucks';
import options from './options';

nunjucks.configure(options.nunjucks);


var app = new Application({
	'/{name*}': HelloController 
}, options);
app.start();
