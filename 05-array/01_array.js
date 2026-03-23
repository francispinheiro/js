console.log(typeof Array, typeof new Array, typeof []); // function

let aprovados = new Array('Bia', 'Carlos', 'Ana'); // Array é uma função construtora
console.log(aprovados); // [ 'Bia', 'Carlos', 'Ana' ]

console.log(aprovados[0]); // Bia
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]); // undefined	

aprovados[3] = 'Paulo'; // Adiciona um elemento na posição 3
aprovados.push('Abia'); // Adiciona um elemento na última posição

console.log(aprovados.length); // 5	

console.log(aprovados);

aprovados[9] = 'Rafael'; // Adiciona um elemento na posição 9
console.log(aprovados.length); // 10

console.log(aprovados);

console.log(aprovados[8] === undefined); // true
console.log(aprovados[8] === null); // false

console.log(aprovados)// [ 'Bia', 'Carlos', 'Ana', 'Paulo', 'Abia', <4 empty items>, 'Rafael' ]

aprovados.sort()

console.log(aprovados)

delete aprovados[1]

console.log(aprovados[1]) // undefined
console.log(aprovados[2]) // undefined
console.log(aprovados) // [ 'Abia', <1 empty item>, 'Ana', 'Paulo', <4 empty items>, 'Rafael' ]

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1) // A partir do índice 1, remove 1 elemento (Carlos)
console.log(aprovados) // [ 'Bia', 'Ana' ]

aprovados.splice(1, 2) // A partir do índice 1, remove 2 elementos (Ana e Carlos)
console.log(aprovados) // [ 'Bia' ]

// Para adicionar elementos usando splice, basta passar o número de elementos a serem removidos como 0
aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(2, 1, 'Elemento1', 'Elemento2', 'Elemento3') // A partir do índice 2, remove 1 elemento e adiciona Dorot e Regina se quiser pode excluir elementos basta passar um número diferente de 0
console.log(aprovados) // [ 'Bia', 'Carlos', 'Dorot', 'Regina' ]
