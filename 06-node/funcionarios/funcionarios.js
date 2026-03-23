const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
	return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
	const funcionarios = response.data
	//const mulherChinesa = funcionarios.filter(f => f.genero === 'F' && f.pais === 'China')
	//const menorSalario = Math.min(...mulherChinesa.map(f => f.salario))
	//const funcionario = mulherChinesa.find(f => f.salario === menorSalario)
	//console.log(funcionarios)

	// mulher chinesa com menor salário
	const func = funcionarios
		.filter(chineses)
		.filter(mulheres)
		.reduce(menorSalario)

	console.log(func)
})