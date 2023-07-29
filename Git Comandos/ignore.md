# Comandos para que o git ignore diretórios ou arquivos
O .gitignore gerado é um arquivo contendo quais arquivos ele deverá ignorar ao add ou commit

Ele de padrão ignora linhas em branco ou começadas com '#'

Permite que iniciemos ou terminemos a referência a um diretório com '/' e tenhamos "glob patterns" 

O simbolo '!' permite a negação de uma pattern (todos menos ela)

## Glob Patterns
* **'*'** representa zero ou mais de caracteres
* **'[abc]'** permite que sejá qualquer caracter dentro dos colchetes (no exemplo a ou b ou c)
* **'?'** representa um único caracter qualquer
* **'[0-9]'** representa valores entre o primeiro e segundo caraqueter contando com eles (0<=entre 0 e 9 n exemplo)
* **'*'** também pode ser utilizado para diretórios como /**/, que são no caso zero, um ou dos diretórios entre as '/'. Ex: a/**/z -> a/z, a/b/z, a/b/c/z e etc.

## Exemplos:

### Nenhum arquivo terminado em .a
``*.a``

### Usando negação para pegar um arquivo, mesmo que ele tenha sido dito como não enviado (*.a)
`!lib.a`

### Ignorando um "arquivo" no diretório selecionado
`/arquivo.txt`

### Ignorando todos os arquivos de um diretório (ignora todos os arquivos de /build)
`build/`

### Ignorando todos os arquivos de um fim específico de um diretório e subdiretório
`doc/*.txt`

# Ignorando todos os arquivos de um diretório, subdiretório e posteriores
doc/**/*.pdf
 
