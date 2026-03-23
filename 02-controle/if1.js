function soBoaNoticia(nota) {
	if (nota >= 7) {
		console.log("Aprovado");
	}
}
soBoaNoticia(8);
soBoaNoticia(6.5);

function seForVerdadeEuFalo(valor) {
	
	if (valor) {
		console.log("É verdade... " + valor);
	}
}
seForVerdadeEuFalo(); // undefined é falso
seForVerdadeEuFalo(null);
seForVerdadeEuFalo(undefined);
seForVerdadeEuFalo(NaN); // NaN é falso
seForVerdadeEuFalo("");
seForVerdadeEuFalo('');
seForVerdadeEuFalo(0);	// 0 é falso
seForVerdadeEuFalo(-1);
seForVerdadeEuFalo(" ");
seForVerdadeEuFalo(' ');
seForVerdadeEuFalo('?');
seForVerdadeEuFalo([]);
seForVerdadeEuFalo([1, 2]);
seForVerdadeEuFalo("false");