console.log(this === global) // this aponta para o module.exports, e não para o global
console.log(this === module) // this é um objeto que tem as mesmas propriedades do module.exports

console.log(this === module.exports) // this aponta para o module.exports
console.log(this === exports) // this aponta para o exports por que é mesma referência do module.exports

function logThis() {
	console.log('Dentro de uma função...')
	console.log(this === exports)
	console.log(this === module.exports)
	console.log(this === global)

	this.perigo = '...' // this aqui aponta para o global, e não para o module.exports
}

this.perigo = '...' // this aqui aponta para o module.exports, e não para o global

logThis()


// em resumo, this em um módulo do node aponta para o module.exports, e não para o global. Dentro de uma função, this aponta para o global.	

