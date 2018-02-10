
const APP_FILE_PATH = '/application.js';
export default class Application {
    constructor(routes, options) {
        this.server = options.server;
		this.document = options.document;
        this.registerRoutes(routes);
    }
	registerRoutes(routes) {
        for(let path in routes){
		    this.addRoutes(path, routes[path]);
		}
    }


	addRoutes(path, Controller) {
        const document = this.document;
		this.server.route({
			path: path,
			method: 'GET',
			handler: (request, reply) => {
			    const controller = new Controller({
         			query: request.query,
					params: request.params
                });
				return controller.index(this, request, reply).then(() => 
						 controller.toString(request, (err) => {
							if(err){
								return 'err';
							}
						})
				).then((body) => 
					 document(this,controller, request, reply, body,null)					
				).then((html) => {
					reply(html);
				});
			}
        });
		this.server.route({
			method: 'GET',
			//path: APP_FILE_PATH,
			path: '/{filename}',
			handler: (request, reply) => {
			    return reply.file('dist/build/application.js');
			}
		});

	//	this.server.route({
	//		method: 'GET',
	//		path: '/{param*}',
	//		handler: {
	//			directory: {
	//				path: '.',
	//				redirectToSlash: true,
	//				index: true
	//			}
	//		}
	//	});

    }

	start() {
		this.server.register(require('inert'), (err) => {

			if (err) {
				throw err;
			}

			this.server.route({
				method: 'GET',
				path: '/picture.jpg',
				handler: function (request, reply) {
					reply.file('/path/to/picture.jpg');
				}
			});

			this.server.start((err) => {

				if (err) {
					throw err;
				}

				console.log('Server running at:', this.server.info.uri);
			});
		});
		//this.server.start();
    }
}
