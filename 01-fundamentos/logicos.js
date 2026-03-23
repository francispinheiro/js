function compras(trabalho1, trabalho2) {
	console.log('Variáveis: ', trabalho1, trabalho2) // true true
	const comprarSorvete = trabalho1 || trabalho2
	const comprarTv50 = trabalho1 && trabalho2
	// const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
	const comprarTv32 = trabalho1 != trabalho2 // xor lógico subtitui o bitwise xor
	const manterSaudavel = !comprarSorvete // operador unário

	// retorna os objetos baseado o ECMAScript 2015, onde a chave é o nome da variável e o valor é o valor da variável. Ou seja, é uma forma de criar um objeto com as variáveis e seus valores de forma mais simples. Internamente, o JavaScript cria um objeto com as chaves e valores correspondentes às variáveis e seus valores. Por exemplo, se a variável comprarSorvete tiver o valor true, o objeto retornado terá a chave comprarSorvete com o valor true. tipo { comprarSorvete: true, comprarTv50: false, comprarTv32: true, manterSaudavel: false }
	return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true)) // { comprarSorvete: true, comprarTv50: true, comprarTv32: false, manterSaudavel: false }
console.log(compras(true, false)) // { comprarSorvete: true, comprarTv50: false, comprarTv32: true, manterSaudavel: false }
console.log(compras(false, true)) // { comprarSorvete: true, comprarTv50: false, comprarTv32: true, manterSaudavel: false }
console.log(compras(false, false)) // { comprarSorvete: false, comprarTv50: false, comprarTv32: false, manterSaudavel: true }	
