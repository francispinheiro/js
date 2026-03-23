const fs = require('fs')

// __dirname é a pasta atual do arquivo que está sendo executado
const caminho = __dirname + '/arquivo.json'

// Sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log('Sincrono:')
console.log(conteudo)

// Assincrono
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
	const configJson = JSON.parse(conteudo)
	console.log('Assincrono:')
	console.log(`Host: ${configJson.db.host}: ${configJson.db.port}`)
})

// Leitura arquivo JSON
const config = require('./arquivo.json')
console.log('Usando require:')
console.log(config.db)

// leitura de uma pasta
fs.readdir(__dirname, (err, arquivos) => {
	console.log('Conteudo da pasta...')
	console.log(arquivos)
})