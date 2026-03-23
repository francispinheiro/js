console.log('01)', '1' == 1) // 01) true
console.log('02)', '1' === 1) // 02) false o primeiro '1' é uma string e o segundo 1 é um número
console.log('03)', '3' != 3) // 03) false o primeiro '3' é uma string e o segundo 3 é um número considera apenas o valor, não o tipo
console.log('04)', '3' !== 3) // 04) true o primeiro '3' é uma string e o segundo 3 é um número considera o valor e o tipo
console.log('05)', 3 < 2) // 05) false
console.log('06)', 3 > 2) // 06) true
console.log('07)', 3 <= 2) // 07) false
console.log('08)', 3 >= 2) // 08) true

const d1 = new Date(0) // 01/01/1970
const d2 = new Date(0)
console.log('09)', d1 === d2) // 09) false os objetos são diferentes, mesmo que tenham o mesmo valor
console.log('10)', d1 == d2) // 10) false os objetos são diferentes, mesmo que tenham o mesmo valor
console.log('11)', d1.getTime() === d2.getTime()) // 11) true os valores dos objetos são iguais

console.log('12)', undefined == null) // 12) true undefined e null são considerados iguais
console.log('13)', undefined === null) // 13) false undefined e null são de tipos diferentes