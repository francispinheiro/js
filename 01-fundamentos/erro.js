function TratarErroELancar(erro) {
	// throw new Error('...')
	// throw 10
	// throw true
	// throw 'mensagem'
	// throw {
	// 	nome: erro.name,
	// 	msg: erro.message,
	// 	date: new Date
	// }
	throw new Error('Ocorreu um erro: ' + erro.message)
}


function imprimirNomeGritado(obj) {
	try {
		console.log(obj.name.toUpperCase() + '!!!')
	} catch (e) {
		// Tratar erro
		TratarErroELancar(e)
	} finally {
		console.log('final')
	}
}

const obj = { name: 'Roberto' }
imprimirNomeGritado(obj) // ROBERTO!!!