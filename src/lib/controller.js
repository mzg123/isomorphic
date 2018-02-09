
import nunjucks from 'nunjucks';

nunjucks.configure('../dist');
export default class Controller {
	constructor(context) {
        this.context = context;
    }

    index(application, request, reply) {
		var promise = new Promise(function(resolve, reject) {
			resolve();
		});
		return promise;
    }

	toString(request, rcallback) {
		callback(null, 'success');
    }
}
