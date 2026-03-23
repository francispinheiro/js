npm init 
	// ajuda a criar as pastas e arquivos do projeto (faça isso dentro da pasta onde irá executar o projeto)
	// vc responde aos questionario do init para que possa então o sistema do node montar o projeto

outra forma de se criar é:

npm init -y 
	// cria de forma rapida sem responder aos questionario e resultando no arquivo package.json
	// lembre: executar dentro da pasta onde será criado o projeto 


pwd 
	// apresenta o path onde se encontra o cursor

npm i --save axios

	// instalou o axios que a forma de conexão com http

// Observação sobre o codigo ^~ das dependencias
^ atualiza a versão e fix, isso é 0.17.1 (após o 1° ponto . para frente então atualiza de 17 para 18,19,20 ... e o fix 2° ponto . para frente )
~ atualiza apenas o fix (2° ponto . para frente) (não atualiza a versao)

e deixando apenas dentro do "" não permite alteração alguma por exemplo:

  "dependencies": {
    "axios": "1.13.6"
  }

  // instalando e salvando para dependencias tipo dev e -E (diz que exatamente a versao desejada)
  npm i --save-dev axios@0.17.1 -E 

  // para o arquivo funcionarios.js
  files.cod3r.com.br/curso-js/funcionarios.json
