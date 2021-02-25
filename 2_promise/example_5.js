const delayedSum = function (a, b) {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			resolve(a + b);
		}, 500);
	});
};

delayedSum(5,5).then(function (result){
    console.log(result);
});

console.time('performance');
delayedSum(2, 2).then(function (a) {
	delayedSum(4, 4).then(function (b) {
		delayedSum(a, b).then(function (result) {
			console.log(result);
			console.timeEnd('performance');
		});
	});
});

// Promise é uma especie de padrão de projeto