let valor // não inicializada
console.log(valor) // undefined

valor = null // ausência de valor
console.log(valor) // null
//console.log(valor.toString()) // Erro! Não é possível ler a propriedade 'toString' de null

const produto = {}
console.log(produto.preco) // undefined
console.log(produto) // {}
produto.preco = 3.50
console.log(produto) // { preco: 3.5 }
produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
//delete produto.preco // delete é a forma correta de remover um atributo e não undefined
console.log(produto) // {}

produto.preco = null // sem preço
console.log(produto) // { preco: null }	
console.log(!!produto.preco) // true
console.log(produto.preco) // null
