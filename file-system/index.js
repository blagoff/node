var fs = require('fs');
var colors = require('colors');

fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
    console.log('Dane przed zapisem!'.blue);
    console.log(data);
    fs.writeFile('./tekst.txt', 'A tak wyglądają po zapisie!', function(err) {
        if (err) throw err;
        console.log('Zapisano!'.blue);
        fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
            console.log('Dane po zapisie'.blue)
            console.log(data);
        });
        fs.appendFile('./tekst.txt', '\nA tak wyglądają po zapisie!', function(err){

        });
    });
});	

fs.readdir('./', 'utf-8', function(err,data){
	if (err) throw err;
	console.log('Zawartość katalogu: '.green);
	console.log(data);

	fs.writeFile('./info.txt', data, function(err){
	if (err) throw err;
	console.log('Zapisano'.blue);
	});

});

