Object.prototype.attr0 = '0' // adicionando um atributo ao objeto Object, ou seja, todos os objetos vão herdar esse atributo, ou seja, ele vai estar disponível para todos os objetos, pois todos os objetos herdam do objeto Object, ou seja, ele é o protótipo de todos os objetos. Não façam isso em casa, pois isso pode causar problemas de desempenho e segurança, pois todos os objetos vão herdar esse atributo, ou seja, ele vai estar disponível para todos os objetos, o que pode causar conflitos com outros atributos ou métodos dos objetos.

// cadeia de protótipos (prototype chain)
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B', attr3: '3' }
const filho = { __proto__: pai, attr3: 'C' }

console.log(filho.attrA, filho.attr0, filho.attr1, filho.attr2, filho.attr3)


const carro = {
	velAtual: 0,
	velMax: 200,
	acelerarMais(delta) {
		if (this.velAtual + delta <= this.velMax) {
			this.velAtual += delta
		} else {
			this.velAtual = this.velMax
		}
	},
	status() {
		return `${this.velAtual}Km/h de ${this.velMax}Km/h `
	}
}

const ferrari = {
	modelo: 'F40',
	velMax: 324 // shadowing, ou seja, a propriedade velMax do objeto ferrari vai "sombrear" a propriedade velMax do objeto carro, ou seja, quando for acessada a propriedade velMax do objeto ferrari, ela vai retornar o valor 324, e não o valor 200 do objeto carro.
}

const volvo = {
	modelo: 'V40',
	status() {
		return `${this.modelo}: ${super.status()}` // super é usado para acessar os métodos do objeto pai, ou seja, o objeto carro, ou seja, ele vai acessar o método status do objeto carro, e não do objeto volvo, pois o método status do objeto volvo está sobrescrevendo o método status do objeto carro.
	}
}

Object.setPrototypeOf(ferrari, carro) // setando o protótipo do objeto ferrari para o objeto carro, ou seja, o objeto ferrari vai herdar as propriedades e métodos do objeto carro. estabele uma relação de protótipo entre os objetos ferrari e carro

Object.setPrototypeOf(volvo, carro) // setando o protótipo do objeto volvo para o objeto carro, ou seja, o objeto volvo vai herdar as propriedades e métodos do objeto carro. estabele uma relação de protótipo entre os objetos volvo e carro

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())