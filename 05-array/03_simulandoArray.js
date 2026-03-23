const quaseArray = { 0: 'Rafael', 1: 'Juca', 2: 'Bia' };
console.log(typeof quaseArray); // object
console.log(quaseArray);

Object.defineProperty(quaseArray, 'toString', {
	value: function () { return Object.values(this) },
	enumerable: false
});

console.log(quaseArray[0]); // Rafael
console.log(quaseArray[1]);	// Juca
console.log(quaseArray[2]); // Bia
console.log(quaseArray);
console.log(quaseArray.toString()); // Rafael,Juca,Bia

const meuArray = ['Rafael', 'Juca', 'Bia'];
console.log(quaseArray.toString(), meuArray); // Rafael,Juca,Bia

