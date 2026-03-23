// Closure é o escopo criado quando uma função é declarada. Esse escopo permite a função acessar e manipular variáveis externas à função.

// Em JavaScript, as funções são objetos de primeira classe, o que significa que elas podem ser tratadas como qualquer outra variável. Isso inclui a capacidade de criar funções dentro de outras funções e acessar variáveis do escopo externo, mesmo após a função externa ter sido executada. Essa característica é conhecida como closure.

const x = 'Global'
function fora() {
	const x = 'Local'
	function dentro() {
		return x
	}
	return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao()) // Local