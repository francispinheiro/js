/*
Array.prototype.forEach2 = forEach2

const forEach2 = function (callback) {
	for (let i = 0; i < this.length; i++) {
		callback(this[i], i, this)
	}
}
*/

Array.prototype.forEach2 = function (callback) {
	for (let i = 0; i < this.length; i++){
		callback(this[i], i, this)
	}
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
// exemplo 0
aprovados.forEach2(function (nome, indice) {
	console.log(`${indice + 1}) ${nome}`)
})