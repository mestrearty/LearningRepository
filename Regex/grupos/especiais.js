let texto = "João é calmo, mas no transito fica nervoso.";

console.log("1",texto.match(/[\wÀ-ú]+/gi));

// Positive lookahead
console.log("2",texto.match(/[\wÀ-ú]+(?=,)/gi));
console.log("3",texto.match(/[\wÀ-ú]+(?=\.)/gi));
console.log("4",texto.match(/[\wÀ-ú]+(?=, mas)/gi));

// Negative lookahead
console.log("5",texto.match(/[\wÀ-ú]+\b(?!,)/gi));
console.log("6",texto.match(/[\wÀ-ú]+[\s|\.](?!,)/gi));

// Positive lookbehind
texto = "supermercado superação hiperMERCADO Mercado";
console.log("7",texto.match(/(?<=super)[\wÀ-ú]+/gi));

//Negative lookbehind
console.log("8",texto.match(/(?<!super)mercado/gi));
