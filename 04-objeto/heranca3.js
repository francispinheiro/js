const pai = { nome: 'Pedro', corCabelo: 'preto' }
const filha1 = Object.create(pai) // criou um objeto filha1 com o pai como protótipo, ou seja, filha1 tem acesso às propriedades do pai, mas não tem as propriedades do pai, ou seja, filha1 é um objeto vazio, mas tem acesso às propriedades do pai.

filha1.nome = 'Ana' 
//filha1.ident = 124567-9
console.log(filha1.corCabelo) 

const filha2 = Object.create(pai, {
	nome: {value: 'Bia', writable: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome = 'Carla' // Não altera o valor da propriedade nome, pois writable está definido como false
filha2.ident = 124567-9
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2 ))

for(let key in filha2) {
	console.log(key)
}

for(let key in filha2) {
	filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herença: ${key}`)
}