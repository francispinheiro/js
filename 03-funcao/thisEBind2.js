function Pessoa() {
	this.idade = 0;
	const self = this; // Solução 1: Armazenar a referência de 'this' em uma variável
	setInterval(function () {
		self.idade++;
		console.log(self.idade);
	}/*.bind(this)*/, 1000);
}

new Pessoa; // NaN, NaN, NaN, ...	
