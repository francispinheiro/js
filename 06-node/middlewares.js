// middleware pattern (chain of responsibility)
const passo1 = (ctx, next) => {
	ctx.valor1 = 'mid1'
	next()
}

const passo2 = (ctx, next) => {
	ctx.valor2 = 'mid2'
	next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'

// operador ...middlewares é o rest operator que junta o restante dos parametros em um array
const exec = (ctx, ...middlewares) => {
	// passarei como atributo o indice do array para saber qual middleware estou executando
	const execPasso = indice => {
		middlewares && indice < middlewares.length && middlewares[indice](ctx, () => execPasso(indice + 1))
	}
	execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)

console.log(ctx)