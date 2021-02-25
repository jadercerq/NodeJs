const loop = function* () {
	let i = 0 ;
	while (i <= 3) {
		yield i++;
	}
}

const generator = loop();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

// Generator é uma espécie de controle remoto da função. Para isso a função é marcada com um asterisco
// Da a habilidade de inserir em uma função um ponto de parada que é o yield
// o yield sai do eventLoop ao pausar a função