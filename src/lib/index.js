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
				);
			}
        });
    }

	start() {
		this.server.start();
    }
}
