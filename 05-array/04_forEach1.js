const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

// exemplo 0
aprovados.forEach(function(nome, indice){
	console.log(`${indice + 1}) ${nome}`)
	//console.log(array)
})

// exemplo 1
aprovados.forEach(nome => console.log(nome))

// exemplo 2
const exeibirAprovados = aprovados => console.log(aprovados)
aprovados.forEach(exeibirAprovados)	

