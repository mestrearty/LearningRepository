const texto = 'O João Recebeu 120 milhões apostando 5 8 21 23 45 59'


regext = (texto, regex)=> console.log(texto.match(regex));

//para definir uma quantificador usa {}
regext(texto,/\d{1,2}/gi);
regext(texto,/[0-9]{2}/gi);
regext(texto,/[0-9]{1,}/gi);
regext(texto,/\w{7}/gi);
regext(texto,/[A-ú]{7}/gi);
regext(texto,/[A-ú]{7,}/gi);
regext(texto,/[\wõ]{7,}/gi);

regext(texto,/\b\d{1,2}\b/gi);//pegando valors com borda (espaço)
regext(texto,/\b[A-ú]\b/gi);
regext(texto,/\b[A-ú]{7}\b/gi);