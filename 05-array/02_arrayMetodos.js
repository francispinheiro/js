const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() // remove o último elemento do array
console.log(pilotos)

pilotos.push('Verstappen') // adiciona um elemento no final do array
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento do array
console.log(pilotos)	

pilotos.unshift('Hamilton') // adiciona um elemento no início do array
console.log(pilotos)

// splice pode adicionar e remover elementos do array
// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') // a partir do índice 2, não remove nenhum elemento e adiciona Bottas e Massa
console.log(pilotos)

// remover
pilotos.splice(3, 1) // a partir do índice 3, remove 1 elemento (Massa)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // gera um novo array a partir do índice 2 até o final do array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // gera um novo array a partir do índice 1 até o índice 4 (exclusivo)
console.log(algunsPilotos2)