export default class Application {
    constructor(routes, options) {
        this.server = options.server;
        this.registerRoutes(routes);
    }
	registerRoutes(routes) {
        for(let path in routes){
		    this.addRoutes(path, routes[path]);
		}
    }


	addRoutes(path, Controller) {
		this.server.route({
			path: path,
			method: 'GET',
			handler: (request, reply) => {
			    const controller = new Controller({
         			query: request.query,
					params: request.params
                });
				return controller.index(this, request, reply, (err) => {
					if(err){
						return 'err';
					}
				});
			}
        });
    }

	start() {
		this.server.start();
    }
}
