const alunos = [
	{ nome: 'João', nota: 7.3, bolsista: false },
	{ nome: 'Maria', nota: 9.2, bolsista: true },
	{ nome: 'Pedro', nota: 9.8, bolsista: false },
	{ nome: 'Ana', nota: 8.7, bolsista: true }
]

const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
	console.log(acumulador, atual)
	return acumulador + atual
}, 0) // O 10 é o valor inicial do acumulador, se não for passado o valor inicial, o acumulador começa com o valor do primeiro elemento do array e a iteração começa a partir do segundo elemento ou não passa nada deixando vazio

console.log(resultado)