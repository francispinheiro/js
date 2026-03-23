// IIFE -> Immediately Invoked Function Expression
// É uma função que é executada assim que é definida, ou seja, sem a necessidade de ser chamada posteriormente. Ela é útil para criar um escopo isolado e evitar poluir o escopo global. isso é foge do escopo global, ou seja, as variáveis e funções definidas dentro da IIFE não estarão acessíveis fora dela, evitando conflitos com outras partes do código.
(function () {
	console.log('Será executado na hora!')
	console.log('Foge do escopo mais abrangente!')
})()