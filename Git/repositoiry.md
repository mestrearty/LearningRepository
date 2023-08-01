# Inicializando um repositório:
### Comandos básicos
```$ git init``` -> Cria um novo diretório '.git' 

```$ git add *.c```  -> Adiciona os arquivos no Staging Area (Area de Preparo)

```$ git add LICENSE```  -> Cria a licensa do repositório

```$ git commit -m 'Initial project version'```  ->com -m já cria o commit com a mensagem do commit em equência e depois salva no banco local do git

### Obtendo (clonando) de um repositório existente

```$ git clone [url]```  -> cria o '.git' e insere todos os dados do repositório

```$ git clone [url] <dir_name>```   -> igual o anterior, mas com diferença que cria um diretorio novo e insere dentro dele

* Vale lembrar que o git aceita https:// git:// e ssh

```$ git status``` -> Exibe o status dos seus diretório. Se foram ou não por exemplo adicionados para serem comitados
	     -> -s ou --short exibe de forma compacta o status

```$ git add [folder/file]``` -> Adiciona o diretório ou arquivo para entrar no próximo commit

