let a = 3
global.b = 123

this.c = 456
this.d = false
this.e = 'teste'

console.log(a) // 3
console.log(global.b) // 123
console.log(this.c) // 456
console.log(this.d) // false
console.log(this.e) // teste
console.log(module.exports.c) // 456
console.log(module.exports === this) // true
console.log(module.exports) // { c: 456, d: false, e: 'teste' }	

// Criando uma variável sem var ou let, torna-se global
// Não faça isso pois pode causar problemas de segurança e manutenção do código, além de poluir o escopo global.
abc = 3 // Criando uma variável sem var ou let, torna-se global
console.log(global.abc) // 3