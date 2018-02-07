import Hapi from 'hapi';
import Application from './lib/index';
import Controller from './lib/controller';
import nunjucks from 'nunjucks';

nunjucks.configure('./dist');

const server =  Hapi.Server({
	host: 'localhost',
	port: 8000
});

function getName(request) {
    let name = {
        fname: 'M',
        lname: 'zg'
    };
    
	let nameParts = request.params.name ? request.params.name.split('/') : [];
    name.fname = (nameParts[0] || request.query.fname) || name.fname;
    name.lname = (nameParts[1] || request.query.lname) || name.lname;
	return name;
}
var app = new Application({
	'/test/{name*}': Controller 
}, {server: server});
app.start();
