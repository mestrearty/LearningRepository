# Comandos básicos para navegar e gerir no Docker

### Criando um container
#### Criar um container -> docker run   \<nome_da_imagem>
##### Opções: 
 * -p \<porta_da_máquina>:\<porta_da_imagem> : define porta que a máquina irá acessa a aplicação e a porta que a aplicação irá usar
 * --name \<nome_do_container> : nomeia o conteiner
 * -rm : cria e apaga o container após o uso
 * -it : acessar o conteiner após criar
 * -v <dir_maquina>:<dir_container> : mapeia uma pasta na sua máquina com a a imagem no seu container. $(pwd) pode ser útil...
 * -d : executa em modo deamon (não fica executando no seu terminal. Fica em "segundo plano")
 
### Gerenciando um container 
#### Ver container ativos -> docker container ps
##### Opções: 
* Ver containers existentes -> -a

#### Iniciar um container -> docker container start -ai \<nome_do_container>
#### Parar um container -> docker stop \<nome_do_container>
#### Alterar o nome de um container -> docker rename \<nome_atual> \<novo_nome>
#### Remover um container -> docker rm \<nome_do_container>


#### Lista o ip em que o docker responde -> docker-machine ip default