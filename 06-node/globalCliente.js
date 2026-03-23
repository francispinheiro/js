require('./global')
console.log(MinhaApp.saudacao())
MinhaApp.nome = 'Outra coisa' // Não tem efeito por causa do Object.freeze
console.log(MinhaApp.nome)