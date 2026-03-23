function rand([min = 0, max = 1000]) {
	if (min > max) [min, max] = [max, min] // invertendo os valores de min e max
	const valor = Math.random() * (max - min) + min
	return Math.floor(valor)
}

console.log(rand([50, 40])) // 42
console.log(rand([600])) // 42
console.log(rand([, 10])) // 42
console.log(rand([])) // 42
//console.log(rand()) // TypeError: Cannot destructure property 'min' of 'undefined' as it is undefined.

// O destructuring é uma forma de extrair valores de um array ou objeto e atribuí-los a variáveis. No exemplo acima, estamos usando o destructuring para extrair os valores de min e max do array passado como argumento para a função rand. Se o array não tiver os valores de min e max, eles serão atribuídos aos valores padrão de 0 e 1000, respectivamente. Se o array tiver apenas um valor, ele será atribuído a min e max será atribuído ao valor padrão de 1000. Se o array tiver os valores de min e max invertidos, eles
// serão invertidos novamente para garantir que min seja menor que max.
// O código acima gera um erro se a função rand for chamada sem argumentos, pois o destructuring tenta extrair os valores de min e max de um array que é undefined. Para evitar esse erro, podemos atribuir um valor padrão para o parâmetro da função rand, como no exemplo abaixo:
