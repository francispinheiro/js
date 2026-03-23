// pessoa -> 123 -> {...}
const pessoa = {
	nome: 'João',
}

//pessoa.nome = 'Maria'
console.log(pessoa.nome)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Xpto'}

// Congela o objento, ou seja, não permite alterações no objeto nem a adição ou remoção de propriedades, ou seja, o objeto se torna imutável.
Object.freeze(pessoa)

pessoa.nome = 'Maria'