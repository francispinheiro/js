// object.preventExtensions
const produto = Object.preventExtensions({
	nome: 'Qualquer',
	preco: 1.99,
	tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto)) // false testa se o objeto é extensível ou seja se pode adicionar novos atributos

produto.nome = 'Borracha' // pode alterar os atributos existentes
produto.descricao = 'Borracha escolar branca' // não pode adicionar novos atributos
delete produto.tag // pode deletar atributos existentes
console.log(produto)

// object.seal (selado)
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa) // selado, ou seja, não pode adicionar novos atributos, nem deletar atributos existentes, mas pode alterar os atributos existentes
console.log('Selado:', Object.isSealed(pessoa)) // true testa se o objeto é selado	
//pessoa.nome = 'Carla' // pode alterar os atributos existentes
pessoa.sobrenome = 'Silva' // não pode adicionar novos atributos
delete pessoa.nome // não pode deletar atributos existentes
pessoa.idade = 29 // pode alterar os atributos existentes
console.log(pessoa)

// object.freeze (congelado)
const carro = { marca: 'Ford', modelo: 'Ka', ano: 2019 }
Object.freeze(carro) // congelado, ou seja, não pode adicionar novos atributos, nem deletar atributos existentes, nem alterar os atributos existentes	
console.log('Congelado:', Object.isFrozen(carro)) // true testa se o objeto é congelado
carro.marca = 'Chevrolet' // não pode alterar os atributos existentes
carro.cor = 'Preto' // não pode adicionar novos atributos
delete carro.ano // não pode deletar atributos existentes
console.log(carro)