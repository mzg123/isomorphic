import Hapi from 'hapi';
import nunjucks from 'nunjucks';
import path from 'path';



const server = new Hapi.Server();
server.connection({ port: 8000, host: 'localhost' });

const APP_FILE_PATH = '/application.js';
server.route({
	method: 'GET',
	//path: APP_FILE_PATH,
	path: '/{filename}',
	handler: (request, reply) => {
	    return reply.file('dist/build/application.js');
	}
});

server.route({
	method: 'GET',
	path: '/templates/{template*}',
	handler: (request, reply) => {
	    return reply.file(path.join('dist', request.params.template));
	}
});

export default{
    nunjucks: './dist',
    server: server,
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
};
