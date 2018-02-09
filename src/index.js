import Hapi from 'hapi';
import Application from './lib/index';
import HelloController from './HelloController';
import nunjucks from 'nunjucks';

nunjucks.configure('./dist');

const server =  Hapi.Server({
	host: 'localhost',
	port: 8000
});

var app = new Application({
	'/test/{name*}': HelloController 
}, {server: server,
	document: function(application, controller, request, reply, body, callback) {
		var promise = new Promise(function(resolve, reject) {
			nunjucks.render('index.html',
              {body: body}
			, function(err, html){
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
