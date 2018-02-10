import Controller from './lib/controller';
import nunjucks from 'nunjucks';

nunjucks.configure('../dist');

export default class HelloController extends Controller {

	getName(context) {
		let name = {
			fname: 'M',
			lname: 'zg'
		};
		
		let nameParts = context.params.name ? context.params.name.split('/') : [];
		name.fname = (nameParts[0] || request.query.fname) || name.fname;
		name.lname = (nameParts[1] || request.query.lname) || name.lname;
		return name;
	}
	toString(request, callback) {
		const context = this.context;
        let getName = this.getName;
		var promise = new Promise(function(resolve, reject) {
			nunjucks.render('./template/hello.html',
			getName(context)
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
