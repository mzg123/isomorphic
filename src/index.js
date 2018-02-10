import Hapi from 'hapi';
import Application from './lib/index';
import HelloController from './HelloController';
import nunjucks from 'nunjucks';

nunjucks.configure('./dist');


const server = new Hapi.Server();
server.connection({ port: 8000, host: 'localhost' });
//const server =  Hapi.Server({
//	host: 'localhost',
//	port: 8000
//});

const APP_FILE_PATH = '/application.js';
var app = new Application({
	'/test/{name*}': HelloController 
}, {server: server,
	document: function(application, controller, request, reply, body, callback) {
		var promise = new Promise(function(resolve, reject) {
			nunjucks.render('index.html',
              {body: body, application: APP_FILE_PATH}
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
