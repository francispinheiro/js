const schedule = require('node-schedule')

// 0 domingo 12 é meio dia // */5 a cada 5 segundos
const tarefa1 = schedule.scheduleJob('*/5 * 12 * * 0', function () {
	console.log('Executando tarefa 1!', new Date().getSeconds())
})

setTimeout(function () {
	tarefa1.cancel()
	console.log('Cancelando tarefa 1!')
}, 20000)

// A cada 5 segundos	
const regra = new schedule.RecurrenceRule()
//regra.second = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55]
// 0 é domingo e 5 é sexta
regra.dayOfWeek = [new schedule.Range(0, 5)]
regra.hour = 12
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function () {
	console.log('Executando tarefa 2!', new Date().getSeconds())
})