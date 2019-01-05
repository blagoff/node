var OSinfo = require('./modules/OSInfo');

process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        var OS = process.env.os;

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

			case '/os':

            process.stdout.write('OS version \n');
            process.stdout.write(OS);
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
    }
});

