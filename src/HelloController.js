import Controller from './lib/controller';
import nunjucks from 'nunjucks';

nunjucks.configure('../dist');

export default class HelloController extends Controller {

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
	toString(request, callback) {
        let getName = this.getName;
		var promise = new Promise(function(resolve, reject) {
			nunjucks.renderString('<p>hello{{fname}}{{lname}}</p>',
			getName(request)
			, function(err, html){
					if (err) {
						resolve(err);
   			        }
				   resolve(html);
			});
		});
		return promise;
    }

}
