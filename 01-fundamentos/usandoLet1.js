// Usando let, a procura por variáveis é feita no escopo do bloco, ou seja, dentro de chaves {}. respeitando do menor para o maior.

let numero = 1
{
	let numero2 = 2
	console.log('dentro =', numero) // dentro = 2
}
console.log('fora =', numero) // fora = 1