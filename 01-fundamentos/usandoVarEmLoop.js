for(var i = 0; i < 10; i++) {
	console.log(i)
}
console.log('i =', i) // i = 10

// O var tem escopo global e de função, ou seja, ele não tem escopo de bloco. Por isso, o i é visível fora do for. Já o let tem escopo de bloco, ou seja, ele só é visível dentro do bloco onde foi declarado. Por isso, o i não é visível fora do for.