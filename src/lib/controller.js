
import nunjucks from 'nunjucks';

nunjucks.configure('../dist');
export default class Controller {
	constructor(context) {
        this.context = context;
    }

    index(application, request, reply, callback) {
        let getName = this.getName;
		var promise = new Promise(function(resolve, reject) {
			nunjucks.render('index.html',
			getName(request)
			, function(err, html){
				   resolve(html);
			});
		});
		return promise;
    }

	toString(rcallback) {
        return "333";
    }

	getName(request) {
		let name = {
			fname: 'M',
			lname: 'zg'
		};
		
		let nameParts = request.params.name ? request.params.name.split('/') : [];
		name.fname = (nameParts[0] || request.query.fname) || name.fname;
		name.lname = (nameParts[1] || request.query.lname) || name.lname;
		return name;
	}
}
