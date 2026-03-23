// hoisting = "içamento" em inglês. É o comportamento do JavaScript de mover as declarações de variáveis e funções para o topo do escopo onde foram declaradas. Isso significa que, mesmo que uma variável ou função seja declarada depois de ser usada, ela ainda estará disponível para uso. No caso das variáveis, apenas a declaração é movida para o topo, mas a atribuição permanece no lugar onde foi escrita. Já no caso das funções, tanto a declaração quanto a definição são movidas para o topo, permitindo que a função seja chamada antes de sua definição no código.

console.log('a =', a) // undefined
var a = 2
console.log('a =', a) // a = 2	

// No caso do var, a declaração é movida para o topo, mas a atribuição permanece no lugar onde foi escrita. Por isso, a variável a é undefined na primeira linha e 2 na segunda linha.

// No caso do let e const, a declaração e a atribuição não são movidas para o topo, por isso, elas não estão disponíveis para uso antes de serem declaradas. Por isso, o código abaixo gera um erro:
// console.log('b =', b) // ReferenceError: b is not defined
// let b = 2	

function teste() {
	console.log('a =', a) // undefined
	var a = 2
	console.log('a =', a) // a = 2	
}
teste()
console.log('a =', a) // undefined

// No caso do var, a declaração é movida para o topo da função teste, mas a atribuição permanece no lugar onde foi escrita. Por isso, a variável a é undefined na primeira linha e 2 na segunda linha dentro da função teste. Já fora da função teste, a variável a é undefined, pois ela não foi declarada no escopo global.