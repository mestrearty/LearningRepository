# REST - Representational State Transfer

Estilo de arquitetura de software utilizada para definir um "padrão de comunicação" computacional em serviços web. Em um resumo "grosso" é um padrão utilizado em requisições http para o transporte de mensagens. O http define como as mensagens devem ser trafegadas, mas não define a estrutura, formato e afins. Logo, O REST, define bem como deve ser estruturado as mensagens. Se você não entendeu nada, tudo bem, eu também relendo o que escrevi eu não entendi. Agora se já entendeu, ótimo, mas vamos que tem mais texto a baixo.

Esse artigo é um "resumo" pessoal, que fiz para poder reforçar alguns conceitos na minha mente, e manter também para consulta. O conhecimento do mesmo foi obtido para desenvolvimento de uma API para um projeto de DTV na academia, e espero que seja útil para outras pessoas.

#### O REST trabalha em conjunto com a estrutura do HTTP, logo é importante entender um pouco mais sobre o mesmo antes de aprofundar em REST.

Quando digitamos em um navegador 'www.google.com', disparamos uma mensagem de padrão, algo como "me de o google.com" na rede. Assim como podemos pedir para que "nos de", podemos pedir também que "enviemos" algo, "apague aquele nude", "altera a planilha", e por ai vai. Logo, o http pede que nós venhamos a definir qual a nossa ação, ou seja um verbo; GET, POST, DELETE, entre outros.

O próprio nome deles já dizem um pouco sobre qual ação cada um faz. Como 'GET' para 'pedir' e 'POST' para 'enviar' algo. Então quando pedimos a página do google, nós madamos algo como "GET www.google.com" (não é exatamente desse jeito, pois nada na vida é tão fácil, mas é quase lá).

Você deve está se perguntando: "Tá bom, blz Ventura, mas porque você ta falando essas coisas?". Ta, eu sei que provavelmente não deve ta fazendo muito sentido, mas vamos lá... Nós aqui estamos falando só da teoria por cima. Pense que eu e você vamos conversar, mas para isso, resolvemos definir algumas facilidades gramaticais, onde verbos são perguntas (ações), e "números" são respostas. Por exemplo, sempre que eu quiser que você me dê ração de cachorro, eu falo "GET Ração Cachorro" e você me retorna a ração se quiser (200) ou me negue (4XX) por algum motivo (numeros explicados mais a frente).

Seguindo então "nosso" padrão definido a menssagem ficaria assim:

GET /?racao=cachorro HTTP/1.1
Host: www.vocemesmo.com.br

Ta, não desespera. Estamos montando aqui aos poucos o formato da requisição. Como podemos ver, primeiro vem o tipo do pedido (verbo), que no nosso caso é 'GET'. Depois vem os "parâmetros" do nosso pedido (query params), falamos que estamos usando o HTTP na versão 1.1 como nosso "combinado" para comunicar, e por fim colocamos o seu endereço para que você receba. Fácil né?

Rlx se algumas coisas não estão tão compreensíveis. A gente vai entender melhor com o tempo. É difícil tentar explicar as coisas as vezes haha.

Certo, talvez eu possa estar deixando você confuso, mas precisei fazer essa brincadeira rapidamente para que você comece a ver um pou as estruturas, e tente entende-las melhor, antes de eu sair te socando um monte de palavra sem sentido. Vamos começar a dar nome aos bois e os colocar em currais.

O http pede que nossa mensagem tenha um corpinho padrão. Sim o http é sexista, machista, e rotulista. Aposto que foi um homem que o modelou... Brincadeiras a parte, a internet é feita de padrões, se não, ninguém se comunicava. Então sim, ele tem um padrão. Igual vimos mais a cima, o padrão base é o seguinte:

<Verbo> <parâmetros> HTTP/<versão> ou se preferir uma nomeclatura mais correta <método> <URL> HTTP/<versão>
<cabeçalhos>
<corpo da requisição>

Não se prenda em decorar e entender isso tudo agora. Vamos ter mais exemplos a frente.

## Verbos (Métodos)

Os verbos são as nossas ações. Eles são nossas intenções, do que queremos fazer. Como estamos trabalhamos com padrões de comunicação, basta associar ao nosso portugues. Tente associar os verbos a algo que você queira fazer, como "pegar", "apagar" ou "alterar". A lista completa deles estão ai:

- GET -> Obter
- POST -> Criar
- PUT -> Alterar
- DELETE -> Apagar
- OPTIONS -> Obter o que é póssivel fazer
- HEAD -> Obter apenas o cabeçalho
- TRACE -> Obter o caminho da requisição
- CONNECT -> Inicia uma comunicação

Bem, o objetivo aqui é dar uma visão bem geral. Não Vou ficar entrando em detalhes sobre o que cada um faz. Isso aqui é apenas um material de apoio, com rápidas anotações de lembrança pessoal. Talvez mais ao final deste você até encontre um detalhamento melhor, mas o importante aqui, neste momento, é entender que eles existem, e tem um papel fundamental na forma de comunicar-mos com os servidores, e você os verá com muita frequência, que fará você dominá-los com o tempo por osmose.

Lembre-se do nosso modelo: "<método> <URL> HTTP/<versão>", então sim, sempre devemos como primeiro de tudo, especificar o que estamos querendo, se por exemplo é obter algo "GET" ou apagar "DELETE", e atente-se, que para cada ação, algo precisa ser feito para termos nossa reação. Então não se assuste se encontrar formas diferente de pedir um item, ou de criar um novo item.

## Cabeçalho

Bem, como muito da computação é feito de analogias (nem sempre tão boas), eu gosto de pensar que estamos escrevendo uma carta. E na nossa carta temos o "Cabeçalho" e o "Corpo". O Cabeçalho de um requisição tem os famosos "metadados", ou seja, dados "técnicos" da nossa carta. Como "quantos caracteres tem", "para quem me dirijo a carta", "em que lingua está escrita", "se você vai precisar de alguma geringonsa muito louca para decifrar os enigmas aqui presentes".

Lembra-se do :

<Verbo> <parâmetros> HTTP/<versão> ou se preferir uma nomeclatura mais correta <método> <URL> HTTP/<versão>
<cabeçalhos>
<corpo da requisição>

? Se você não se lembrar, ou tem preguiça de ler, e ta lendo uma coisa acada dois mêses, ou sua memória é pior que a minha. Mas rlx, já escrevi ai em cima novamente. 

Vamos dar uma atenção ao <cabeçalhos>.
Os cabeçalhos ficam as especificações do que que queremos/teremos como resposta. Nele definimos coisas como Tamanho da resposta (Content-Length), tipo da resposta (Conten-Type), ou para quem estou enviando (Host).
E para manter a ordem, madamos sempre um por linha, com ':' entre o atributo e o valor.

Requisição:
GET /foto/1 HTTP/1.1 
Host: pedro.com.br 
Accept: image/* 

Resposta:
HTTP/1.1 200 OK 
Content-Type: image/png 
Content-Length: 52343

Exemplos de campos:
* Host - mostraqual foi oDNS utilizadoparachegaraesteservidor 
* User-Agent - fornece informaçõessobreomeioutilizadoparaacessareste endereço 
* Accept - realiza negociação com o servidor a respeito do conteúdo aceito. • Accept-Language-negociacomoservidorqual oidiomaaserutilizadona resposta • Accept-Encoding-negociacomoservidorqualacodificaçãoaserutilizada naresposta • Connection-ajusta otipodeconexãocomoservidor(persistenteou não).

### Códigos de Retorno

Bem, vaos falar mais sobre os códigos de erro. Lembra quando eu disse que você podia me enviar um número como resposta, que eu saberia o que ele significaria? Então, é aqui que você descobre os valores deles, uma vez que "um número vale mais do que duas palavras". Certo, para facilitar o entendimento e até processamentos automáticos, números são definidos como padrões de respostas. Isto serve para facilitar e muito o entendimento do cliente (pessoa ou máquina) sobre o que aconteceu com a requisição solicitada.

Esse resultado vem em nosso cabeçalho, logo depois do HTTP/1.1 <Resultado> e/ou em "Status-Code: <Resultado>".
A baixo você ve alguns valores convencionais. Lembre-se de ficar atento, que apesar de os significados serem uma "convensão", ta mais pra sugestão, e cada API pode ter seus próprios significados.

## 1XX Informacionais

## 2XX Códigos de Sucesso

## 3XX Códigos de Redirecionamento

## 4XX Erros causados pelo Cliente

## 5XX Erros originados no Servidor

É, eu coloquei BEM GRANDE pra tu decorar essa porquera. Eu tenho um papel A4 escrito a mão na minha parede, só pra bater o olho e bater a depressão, digo, recordar até fixar.

## Códigos mais comuns

Alguns exemplos:
### 2XX Códigos de Sucesso

- 200 - Ok -> Indica que a operação solicitada teve sucesso;
- 201 - Created -> Indica que o recurso desejado foi criado com sucesso;
- 202 - Accepted -> Indica que a solicitação foi recebida e será processada posteriormente (assíncrona);
- 204 - No Content -> Não há retorno de conteúdo;
- 206 - Partial Content -> Utilizado em requisições GET parciais, ou seja, que demandam apenas parte do conteúdo armazenado no servidor.

### 3XX Códigos de Redirecionamento
- 301 - Moved Permanetly -> Significa que o recurso solicitado foi realocado permanentemente;
- 303 - See Other -> A requisição é processada, mas o servidor não deseja informar o status desse processamento;
- 304 - Not Modified -> Significa que não houve alterações desde a última solicitação;
- 307 - Temporary Redirect -> Similar ao 301, com a diferença que diz que o redirecionamento é temporário (igual seu amigo que pega um livro emprestado e diz que já já devolve).

### 4XX Erros causados pelo Cliente
- 400 - Bad Request -> Resposta genêrica para qualquer tipo de erro de responsabilidade do solicitante (cliente);
- 401 - Unauthorized -> Quando o cliente solicita algo "privado" sem solicitação ou com uma inválida;
- 403 - Forbidden -> Quando o cliente está tentando realizar uma operação sem devida autoriação;
- 404 - Not Found -> Serviço solicitado não existe (tipo quando tentamos sacar dinheiro do banco).
- 405 - Method Not Allowed -> Quando o método solicitado não é suportado na URL;
- 409 - Conflict -> Quando há conflito entre recursos. Como criar um email, mas o mesmo já existe;
- 410 - Gone -> Assim como sua vida, significa que o recurso já existiu, mas agora não existe mais;
- 412 - Precondition failed -> Utilizado para quando há alguma precondição faltosa, herrônia ou problemas de condicionais;
- 415 - Unsupported Media Type -> Quando o tipo da mídia que o cliente solicitou não é suportado pelo servidor;

### 5XX Erros originados no Servidor
- 500 - Internal Server Error -> Outra resposta genérica, só que dessa vez a merda é do servidor.
- 503 - Service Unavailabe -> Quando o serviço solicitado não está disponível;

## Query e Route Params 

Você deve estar pensando "Nossa que legal! Eu posso pedir e mandar várias coisas. Mas como eu faço para mandar algumas informações, para que o meu pedido fique mais a minha cara?". kkk Muito tiozão dos livro didático essa frase né? Mas tudo bem, agora que tu já sacou minha ideia, vamos parar do "Params". 
Existem várias formas de passarmos as informações que queremos em nossas requisições. Uma delas mesmo é o Header (cabeçalho) que vimos a cima. Existem outras que falarei mais a frente, mas aqui, iremos ver o "Query Params".

Parâmetros de query são parâmetros que passamos em nossa URL. É como se dessemos instruções para o carneiro na hora de entregar a carta, como: "Olha entrega a carta somente para o Lucas se ele estiver com roupa azul" ou pedimos uma pizza com uva passas e sem cebola.

VAMOS VOLTAR AOS VERBOS! Eu disse que você os veria novamente. Aposto que achou que não seria aqui, muito menos tão rápido né? "ACHOU ERRADO OTAKU!". 

Vamos então montar nossos pedidos. Como eu quero receber uma pizza, eu vou de "GET":

GET /alimento/pizza?passas=sim&cebola=não HTTP/1.1 

Como você pode ver, fizemos uma "rota" (route), onde eu defino que quero pedir um alimento que será uma pizza, e defino o nome dos condimentos e se tem ou não como se fossem variáveis recebendo valore (query). Nessa abordagem de 'route params', valores de roda são definidos entre '/', como vimos '/alimento/pizza'. Pense só se no lugar de comida a gente tivesse pedindo uma bebida, seria algo como '/bebida/herba-life'. Agora outra forma de inserirmos esses valores, é através de "query params", onde após o '?', nós inserimos um parâmetro e em sua sequência um valor, onde o sinal '=' significa a associação dos parâmetro=valor. Caso tenhamos mais de um parâmetro, devemos nos atentar em utilizar '&' para os separar.

Como eu disse, os Métodos (verbos) tem algumas especificidades. O GET por exemplo, ele só aceita receber valores através de cabeçalhos de route/query params, ou seja, nada de body (veremos mais a frente).

Não há um padrão se suas rodas deverão sempre seguir "singular ou plural", mas é importante que você determine um padrão de uso. Lembre-se que outros terão que usar, e o ser humano também compreende melhor padrões.

### Body 
Por fim, logo após o nosso "header" temos nosso corpinho zenzual, o "body". Vou brincar aqui e dizer que nele a gente manda "a poha" toda.
Eu gosto de lembrar de um episódeo de um desenho (que não me lembro qual), em que um cara passa e buzina para uma mulher de pernas "top" e grita "que pernocas em?". A mulher fica toda boba e fala "sou só pernas", abre o vestido e mostra que é literalmente uma cabeça com duas pernas. O cara corre de medo. Eu também correria de medo se todas as informações tivessem que ser passadas pelo header. Inclusive seria ruim, pois um certo método (vou deixar vocês pensarem) puxa somente as informações do header.

O body vem então para basicamente que podemos inserir mais dados, que podem ser em formatos que uma aplicação está esperando, como em uma API por exemplo. Minha experiência é somente com JSON (talvez eu fale um pouco mais sobre um dia), mas existem vários outros, como XML,YAML,  etc etc. 

### Conclusão
Eu poderia aqui falar sobre várias outras coisas como Autenticação, falar mais sobre as variações dos campos do header, e bla bla bla. Mas a ideia é ser um pouco mais resumido, só para fixar alguns conceitos básicos. Talvez eu faça uma continuação a medida que eu mesmo vá aprendendo coisas novas. Abraços, espero que tenha sido útil.

PS: Falei besteira em algum lugar aqui ou acha que algo legal poderia ser inserido? Me manda um e-mail, bora melhorar o texto. phventurarodrigues@gmail.com
