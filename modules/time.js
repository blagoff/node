process.stdin.setEncoding('utf-8');

/*var os = require('os');
var uptime = os.uptime();*/


function time(uptime) 
{
    var hour = Math.floor(uptime / 3600);
    var minute = Math.floor((uptime - (hour * 3600)) / 60);
    var second = uptime - (hour * 3600) - (minute * 60);

   

    if(hour > 0) {
        console.log('Time :', hour.toFixed(0), ' hours ' + minute.toFixed(0), ' minutes ' + second.toFixed(0), ' seconds' );
    }
    else if (minute > 0 ) {
        console.log('Time :', minute.toFixed(0), ' minutes ' + second.toFixed(0), ' seconds');
        
    }
    else  {
        console.log('Time :', second.toFixed(0), ' seconds');
    }
}

exports.time = time;


