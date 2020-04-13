let texto = "dia diatonico diafragma media wikipedia bom_dia melodia radial";

console.log('1',texto.match(/\bdia\w*/gi));
console.log('2',texto.match(/\w*dia\b/gi));
console.log('3',texto.match(/\w+dia\w+/gi));
console.log('4',texto.match(/\bdia\b/gi));

//borda é não \w... ou seja, buga tudo com ascentos...
texto = "dia diatônico diafrágma, média wikipédia bom-dia melodia radial";

console.log('a)',texto.match(/\bdia\b/gi));
console.log('a2)',texto.match(/(\S*)?dia(\S*)?/gi));//repare que a virgula vem junto...
console.log('a3)',texto.match(/([\wÀ-ú-]*)?dia([\wÀ-ú-]*)?/gi));//repare que a virgula NÃO vem junto...
console.log('b)',texto.match(/\bdia\w*/gi));
console.log('c)',texto.match(/\w*dia\b/gi));
console.log('d)',texto.match(/\w+dia\w+/gi));
console.log('e)',texto.match(/\bdia\b/gi));
