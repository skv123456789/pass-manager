var argv = require('yargs').argv;
var command = argv._[0];
console.log(argv);

if (command === 'hello' && typeof argv.fn !== 'undefined'){
	console.log('Hello' + argv.fn);
}else if (command === 'hello'){
	console.log('Hello world!');
}