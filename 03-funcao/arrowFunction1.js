let dobro = function (a) {
	return 2 * a
}

dobro = (a) => {
	return 2 * a
}

dobro = a => 2 * a // return implícito

console.log(dobro(Math.PI))

let ola = function () {
	return 'Olá'
}

ola = () => 'Olá dds'	
ola = _ => 'Olá dds 2' // Possui um parâmetro, mas ele é ignorado
console.log(ola())