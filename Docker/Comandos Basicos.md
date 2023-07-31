# Anotações Rápidas sobre Docker e Comandos básicos para navegar e gerir

### Criando um container
#### Criar um container -> docker run   \nome_da_imagem
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

#### Iniciar um container -> docker container start -ai \<nome_do_container> ou <container_id>
#### Reiniciar um container ->docker container restart \<nome_do_container>
#### Parar um container -> docker container stop \<nome_do_container>
#### Alterar o nome de um container -> docker container rename \<nome_atual> \<novo_nome>
#### Remover um container -> docker container rm \<nome_do_container> (também funciona com image)
#### Listando containers ativos-> docker container ps ou ls ou list ou docker ps
##### Opções: 
###### ls ou list:
* -a -> Todos os containers
###### Obs: o mesmo pode ser feito para imagens e volumes, basta trocar 'container' por 'image' ou 'volume'


#### Exibindo logs de um container -> docker container logs \<nome_do_container>
#### Configurações e detalhes do container (JSON) -> docker container inspect \<nome_do_container>

#### Versão do sistema do container -> docker container exec \<nome_do_container> uname -or

#### Lista o ip em que o docker responde -> docker-machine ip default


### docker -h
* Listar as opções do comando docker

### docker run ...
* Criar e executar um container

### docker start <container-name> 
* Executar um container

###  docker stop <container-name>
* Encerrar a execução de um container

### docker ps
* Listar containers em execução

### docker ps -a
* Listar todos os containers

### docker rm <container-name>
* Excluir um container

### docker images
* Listar todas as imagens no PC

### docker rmi <image-name>
* Excluir uma imagem no PC

### docker logs <container-name>
*  Exibir os logs da execução do container

### docker inspect <container-name>
* Exibir todas as informações do container

### docker info
* Exibir as informações do Docker

