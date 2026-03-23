const escola = [{
	nome: 'Turma M1',
	alunos: [{	nome: 'Gustavo', nota: 7.3, bolsista: false},
	{nome: 'Ana', nota: 9.2, bolsista: true}]
}, {		
	nome: 'Turma M2',
	alunos: [{	nome: 'Bia', nota: 8.2, bolsista: false},
	{nome: 'Daniel', nota: 6.2, bolsista: false}]
}]

const getNotaAluno = aluno => aluno.nota
const getNotaTurma = turma => turma.alunos.map(getNotaAluno)
const notas1 = escola.map(getNotaTurma)
console.log(notas1)

Array.prototype.flatMap = function (callback) {
	return Array.prototype.concat.apply([], this.map(callback))
}	

const notas2 = escola.flatMap(getNotaTurma)
console.log(notas2)