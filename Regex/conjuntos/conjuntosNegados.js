let texto = `1,2,3,4,5,6,a.b c!d?e[f`;

regexTest = (regex)=>console.log(texto.match(regex));

regexTest(/\D/g);
regexTest(/[^1-9]/g);
regexTest(/[^\d!\?\[\.\s,]/g);


texto = '1: !"#$%&()*+,-.\' 2: :;<=>?@';

regexTest(/[^!-/:-@\s]/g)