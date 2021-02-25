import fs from 'fs';

const delayedSum = function () {
	return new Promise(function (resolve, reject) {
        fs.readFile('./texto.txt','utf8', function(err, data) {
            console.log(data);
        });
        console.log("Estou no eventLoop");
	});
};

delayedSum();

// Nesse exemplo o eventLoop aciona o pool de threads (libuv) para fazer o IO