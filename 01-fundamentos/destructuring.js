// novo recurso do ES2015
// O destructuring é uma forma de extrair valores de um array ou de um objeto e atribuí-los a variáveis. Ele é muito útil para evitar a repetição de código e para tornar o código mais legível.

const pessoa = {
	nome: 'Ana',
	idade: 5,
	endereco: {
		logradouro: 'Rua ABC',
		numero: 1000
	}
}

// Extraindo valores de um objeto {} operador destructuring
// tirei o nome e a idade do objeto pessoa e atribuí-los a variáveis com o mesmo nome
const { nome, idade } = pessoa
console.log(nome, idade) // Ana 5

const { nome: n, idade: i } = pessoa
console.log(n, i) // Ana 5

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada) // undefined true

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep) // Rua ABC 1000 undefined	

// sempre que for extrair um valor de um objeto, é necessário usar o mesmo nome da propriedade do objeto para a variável, ou usar o operador : para atribuir um nome diferente para a variável. E deve existir a propriedade no objeto, caso contrário, a variável será undefined. Também é possível atribuir um valor padrão para a variável, caso a propriedade não exista no objeto. No caso de objetos aninhados, é possível usar o operador destructuring para extrair os valores das propriedades aninhadas.

//const { conta: { age, num } } = pessoa
//console.log(age, num) // TypeError: Cannot destructure property 'age' of 'pessoa.conta' as it is undefined. --- IGNORE ---
