function soma() {
	let soma = 0
	for (i in arguments) {
		soma += arguments[i]
	}
	return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.7, 4.8))
console.log(soma(1, 2, 3,"Teste"))

console.log(soma('a', 'b', 'c'))