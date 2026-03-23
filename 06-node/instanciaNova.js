// Uma factory retorna um objeto novo toda vez isso é uma nova instancia
module.exports = () => {
	return {
		valor: 1,
		inc() {
			this.valor++
		}
	}
}