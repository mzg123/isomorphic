import Hapi from 'hapi';
const server =  Hapi.Server({
	host: 'localhost',
	port: 8000
});
	server.route({
	    method: 'GET',
	    path: '/hello',
	    handler: function (request, reply){
			return "hello work";
	    }
	});

server.start();
