const delayedSum = function (a, b, cb) {
	setTimeout(function () {
		cb(a + b);
	}, 2000);
};

delayedSum(2, 2, function (result) {
	console.log(result);
});

// Nesse caso resolve o problema do example_2.js. 
// Aqui fazemos a amarração das funções inserindo uma função de callback, pra criar o comportamento assicrono
// Ao chamar a função, ele vai para o eventLoop, executa e depois aguarda os 2s.
// O setTimeout pode ser entendido como um IO