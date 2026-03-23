console.log(`inicio: ` + soma(5, 3))
// console.log(subtracao(5,3)) // Erro, subtracao não foi definida ainda	
// console.log(multiplicacao(5,3)) // Erro, multiplicacao não foi definida ainda

// como o declaração de função é "elevada" (hoisted) para o topo do contexto, ela pode ser chamada antes de sua definição. Já as expressões de função, sejam anônimas ou nomeadas, não são elevadas, e portanto, não podem ser chamadas antes de sua definição.


// function declaration
function soma(x, y) {
	return x + y
}

// function expression
const subtracao = function (x, y) {
	return x - y
}

// named function expression
const multiplicacao = function mult(x, y) {
	return x * y
}

console.log(soma(0, 4))
console.log(subtracao(3, 5))
console.log(multiplicacao(3, 4))