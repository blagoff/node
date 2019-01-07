var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();
var OSinfo = require('./modules/OSInfo');

emitter.on('beforeCommand', function(instruction) {
    console.log('You wrote: ' + instruction + ' trying to run command.')
});
emitter.on('afterCommand', function() {
    console.log('Finished command');
});

process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        var OS = process.env.os;

         emitter.emit('beforeCommand', instruction);

        switch(instruction)
        {
        	case  '/exit':
        	
        	process.stdout.write('Quitting app!\n');
            process.exit();
            break;

            case '/process.env':

            process.stdout.write('node version \n');
            process.stdout.write(process.version);
			break;

			case '/sayhello':
            process.stdout.write('hello!\n');
            break;

            case '/getOSinfo':

            OSinfo.print();
            break;

			default:

			process.stderr.write('Wrong instruction!');
        }

        emitter.emit('afterCommand');
    }
});

