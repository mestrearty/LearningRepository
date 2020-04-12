const texto = 'ABC [abc] a-c 1234';

regexTest = (regex)=>console.log(texto.match(regex));

//Intervalos seguem a ordem da tabela ASCII / Unicode
regexTest(/[a-c]/g);
regexTest(/a-c/g);
regexTest(/[A-z]/g);


