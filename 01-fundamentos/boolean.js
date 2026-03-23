let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // !! converte o valor para booleano

isAtivo = 0
console.log(!!isAtivo)

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!undefined)
console.log(!!(isAtivo = false))
console.log(!!NaN)

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' ')) // o resultado é true, pois o operador || retorna o primeiro valor verdadeiro encontrado	

let nome = 'Lucas'
console.log(nome || 'Desconhecido') // o resultado é Lucas, pois o operador || retorna o primeiro valor verdadeiro encontrado