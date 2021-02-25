const delayedSum = function (a, b) {
	setTimeout(function () {
		return a + b;
	}, 2000);
};

const result = delayedSum(2, 2);

console.log(result);

// Nesse exemplo a funsção é colocada numa fila para execução futura, porém no console sai undefined por não ter uma função de retorno