let num1 = 1
let num2 = 2

// posfixado
num1++ // num1 = num1 + 1
console.log(num1) // 2

// prefixado, tem uma prioridade maior que o posfixado
--num1 // num1 = num1 - 1
console.log(num1) // 1

console.log(++num1 === num2--) // 2

console.log(num1 === num2) // 1 === 1 -> true