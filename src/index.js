import Hapi from 'hapi';
import nunjucks from 'nunjucks';

nunjucks.configure('./dist');

const server =  Hapi.Server({
	host: 'localhost',
	port: 8000
});
	server.route({
	    method: 'GET',
	    path: '/hello',
	    handler: function (request, reply){
			return 'Hello, world!';
	    }
	});
	server.route({
	    method: 'GET',
	    path: '/word',
	    handler: function (request, h){
			var promise1 = new Promise(function(resolve, reject) {
				nunjucks.render('index.html', {
				    fname: 'Miao', lname: 'zg'	
				}, function(err, html){
				       resolve(html);
				});
			});
			return promise1;
	    }
	});

server.start();
