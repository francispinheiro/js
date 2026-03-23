function getPreco(imposto = 0, moeda = 'R$') {
	return `${moeda} ${this.preco * (1 - this.desconto) * (1 + imposto)}`
}

const produto = {
	nome: 'Notebook',
	preco: 4589.49,
	desconto: 0.15,
	getPreco	
}

global.preco = 20
global.desconto = 0.1

console.log(getPreco()) // NaN, undefined
console.log(produto.getPreco()) // R$ 3901.0665

const carro = { preco: 49990, desconto: 0.20 }

console.log(getPreco.call(carro)) // R$ 39992
console.log(getPreco.apply(carro)) // R$ 39992
console.log(getPreco.call(carro, 0.17, '$')) // $ 46791.4
console.log(getPreco.apply(carro, [0.17, '$'])) // $ 46791.4