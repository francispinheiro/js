// Criação do objeto

const ferrari = {
	modelo : 'F40',
	velMax : 324
}

const volvo = {
	modelo : 'V40',
	velMax : 200
}

// Heranca, procura por prototipo, ou seja, se o objeto não tiver a propriedade ou método, ele procura no protótipo, que é o objeto pai, e assim por diante até chegar no Object.prototype, que é o protótipo mais alto da cadeia de protótipos.

console.log(ferrari.prototype) // undefined, pois o objeto criado com a notação literal não tem o atributo prototype, ou seja, não tem um protótipo específico, mas ele tem um protótipo genérico que é o Object.prototype

console.log(ferrari.__proto__) // Object.prototype é {} vazio mas está presente

console.log(ferrari.__proto__ === Object.prototype) // true Object.prototype é o protótipo de ferrari de alto nível

console.log(volvo.__proto__ === Object.prototype) // true Object.prototype é o protótipo de volvo de alto nível

console.log(Object.prototype.__proto__) // null, ou seja, Object.prototype é o protótipo mais alto da cadeia de protótipos, não tem protótipo pai, ou seja, é o topo da cadeia de protótipos.

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)