function rand({ min = 0, max = 1000 }) {
	const valor = Math.random() * (max - min) + min
	return Math.floor(valor)
}

const obj = { max: 50, min: 40 }
console.log(rand(obj)) // 42
console.log(rand({ min: 955 })) // 958 
console.log(rand({})) // 123
//console.log(rand()) // TypeError: Cannot destructure property 'min' of 'undefined' as it is undefined.