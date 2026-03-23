const escola = "Cod3r"
console.log(escola.charAt(4)) // r
console.log(escola.charAt(5)) // vazio
console.log(escola.charAt(0)) // vazio

console.log(escola.charCodeAt(3)) // 51
console.log(escola.indexOf('3')) // 3


console.log(escola.substring(1)) // od3r
console.log(escola.substring(0, 3)) // Cod

console.log('Escola '.concat(escola).concat("!")) // Escola Cod3r!
console.log('Escola ' + escola + "!") // Escola Cod3r!

console.log(escola.replace(3, 'e')) // Coder
console.log(escola.replace(/\d/, 'e')) // Coder		

// Expressão regular para substituir todos os dígitos
console.log(escola.replace(/\d/g, 'e')) // Coder

// array split converte string em array
console.log('Ana,Maria,Pedro'.split(',')) // [ 'Ana', 'Maria', 'Pedro' ]	
