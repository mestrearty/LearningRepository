//ShortHands são "atalhos" para um grupo de caracter
//Letra minúscula são os que fazem parte, e maíuscula são o oposto
//\w -> A-z + 0-1 + _ e \W não \w
//\d -> 0-9 dígitos e \D == ^\d
//\s -> \s \t \n \f \r e \S == ^\d
//\b 

const texto = `1,2,3,4,5,6,a.b c!d?e\ta\rb\f-
f_g`;
console.log(texto);

regexTest = (regex)=>console.log(texto.match(regex));

regexTest(/\d/g);//números
regexTest(/\D/g);//não números

regexTest(/\w/g); //caracteres alfanumericos
regexTest(/\W/g); //caracteres não alfanumericos

regexTest(/\s/g); //tabulações [\n\t\f\r]
regexTest(/\S/g); //não tabulações [\n\t\f\r]

