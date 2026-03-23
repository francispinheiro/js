// JSON javaScript Object Notation
// JSON é um formato de dados leve e fácil de ler e escrever, usado para armazenar e transmitir dados entre sistemas. Ele é baseado em uma sintaxe de objetos JavaScript, mas é independente de linguagem, ou seja, pode ser usado em qualquer linguagem de programação que suporte a leitura e escrita de arquivos de texto.
// JSON é uma string, ou seja, é um texto, e não um objeto JavaScript. Para transformar um JSON em um objeto JavaScript, é necessário usar a função JSON.parse(), que converte uma string JSON em um objeto JavaScript. Para transformar um objeto JavaScript em uma string JSON, é necessário usar a função JSON.stringify(), que converte um objeto JavaScript em uma string JSON.

const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj)) // JSON é uma string, ou seja, é um texto, e não um objeto JavaScript. Para transformar um JSON em um objeto JavaScript, é necessário usar a função JSON.parse(), que converte uma string JSON em um objeto JavaScript. Para transformar um objeto JavaScript em uma string JSON, é necessário usar a função JSON.stringify(), que converte um objeto JavaScript em uma string JSON. Observação: a função soma() não é convertida para JSON, pois JSON só suporta tipos de dados primitivos, como strings, números, booleanos, null, arrays e objetos, e não suporta funções ou métodos.

// console.log(JSON.parse("{ a:1, b:2, c:3}")) // Erro, JSON.parse() espera uma string JSON válida, ou seja, as chaves dos objetos devem estar entre aspas duplas, e os valores devem ser do tipo string, número, booleano, null, array ou objeto. No exemplo acima, as chaves dos objetos não estão entre aspas duplas, e os valores são do tipo número, o que não é permitido em JSON.	

// console.log(JSON.parse("{a:1, b:2, c:3}")) // Erro, JSON.parse() espera uma string JSON válida, ou seja, as chaves dos objetos devem estar entre aspas duplas, e os valores devem ser do tipo string, número, booleano, null, array ou objeto. No exemplo acima, as chaves dos objetos não estão entre aspas duplas, e os valores são do tipo número, o que não é permitido em JSON.

// console.log(JSON.parse("{'a':1, 'b':2, 'c':3}")) // Erro, JSON.parse() espera uma string JSON válida, ou seja, as chaves dos objetos devem estar entre aspas duplas, e os valores devem ser do tipo string, número, booleano, null, array ou objeto. No exemplo acima, as chaves dos objetos estão entre aspas simples, o que não é permitido em JSON. As chaves dos objetos devem estar entre aspas duplas para serem válidas em JSON.

console.log(JSON.parse('{"a":1, "b":2, "c":3}')) // JSON.parse() espera uma string JSON válida, ou seja, as chaves dos objetos devem estar entre aspas duplas, e os valores devem ser do tipo string, número, booleano, null, array ou objeto. No exemplo acima, as chaves dos objetos estão entre aspas duplas, e os valores são do tipo número, o que é permitido em JSON. O resultado é um objeto JavaScript com as propriedades a, b e c com os valores 1, 2 e 3 respectivamente. Observação: a função soma() não é convertida para JSON, pois JSON só suporta tipos de dados primitivos, como strings, números, booleanos, null, arrays e objetos, e não suporta funções ou métodos.

console.log(JSON.parse('{"a":1.7, "b": "string", "c": true, "d": {}, "e": []}'))  // "d": {} é um objeto vazio, e "e": [] é um array vazio, ambos são válidos em JSON.

// validate: jsonvalidator.com
