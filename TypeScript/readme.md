# TypeScript

### tsconfig.json
Alguns parâmetros e o que fazem:
* "sourceMap": Gera um arquivo.map além o .js para seja exibido no navegador o código original em TS;
* "target": Qual versão do ecma será compilado ;
* "strict": Verifica se o tipo declarado para uma variável realmente está sendo mantido em todo o código;
* "noEmitOnError": Não compila quando houver erro;
* "noImplicityAny": Reclama quando você não declara que uma variável é "any"
* "strictNullCheckrs": Verifica se o código pode gerar um valor nulo para alguma variável em algum momento;
* "noUnusedParameters": Verifica se um parâmetro não é utilizado;
* "noUnusedLocals": Verifica se uma variável está sendo usada;
* "outDir": Diretório onde será gerado os arquivos compilados;
* "outFile": Permite que todo o projeto gere um único arquivo. Ps, deve alterar o módule para "system" por exemplo. o "commonjs" não é "compatível".