import Hapi from 'hapi';
const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000
});

server.route({
    method: 'GET',
    path: '/hello',
    handler: function (request, reply) {
        reply('hello word');
    }
});

server.start();
