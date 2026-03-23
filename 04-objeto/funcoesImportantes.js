const pessoa = {
	nome: 'Rebeca',
	idade: 2,
	peso: 13
}

console.log(Object.keys(pessoa)) // Retorna um array com as chaves do objeto
console.log(Object.values(pessoa)) // Retorna um array com os valores do objeto
console.log(Object.entries(pessoa)) // Retorna um array com os pares chave-valor do objeto

Object.entries(pessoa).forEach(e => {
	console.log(`${e[0]}: ${e[1]}`)
})

Object.entries(pessoa).forEach(([chave, valor]) => {
	console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
	enumerable: true, // Define se a propriedade aparecerá nas enumerações do objeto
	writable: false, // Define se a propriedade pode ser alterada
	value: '01/01/2019' // Define o valor da propriedade		
})

pessoa.dataNascimento = '01/01/2017' // Não altera o valor da propriedade, pois writable está definido como false
console.log(pessoa.dataNascimento)

console.log(Object.keys(pessoa)) // A propriedade dataNascimento aparece nas chaves do objeto, pois enumerable está definido como true

Object.entries(pessoa).forEach(e => {
	console.log(`${e[0]}: ${e[1]}`)
})

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2) // O método Object.assign() é usado para copiar os valores de todas as propriedades enumeráveis de um ou mais objetos de origem para um objeto de destino. Ele retorna o objeto de destino.
console.log(dest) // O objeto de destino é modificado e retorna o objeto de destino
obj.c = 1234 // Modificando o objeto de destino, o objeto de origem também é modificado, pois ambos apontam para o mesmo objeto na memória
console.log(obj) // O objeto de destino é modificado e retorna o objeto de destino