# Anotações Rápidas sobre Mongo DB e Comandos
## Nomenclaturas
Mongo = Mysql
Database = Banco de dados
Collection = Tabelas
Documents = Dados

Info: Diferente de banco de dados relacional, em bancos não relacionais como Mongodb, você não precisa ter o banco pronto antes de armazenar. Ele cria o banco a medida que você vai inserindo dados. Ou seja, você inclusive pode alterar as collections (tabelas) em tempo de execução.

Todo Document tem um id gerado automaticamente. Esse ID é um hash com a timestamp, e o mongo garante que sempre haja ao menos 1ms de diferença entre cada operação para garantir o ID único.

```JSON
{
  "_id" : ObjectId("64c3ec2742dc4834b777e00b")
}
```

## Comandos Básicos
### Exibir todos os Bancos de Dados
```show dbs```

Exibe os bancos

### Exibir banco em uso
  ```db```

  Exibe o banco utilizado no momento

### Criar/Usar uma Database
```use name_database```

Cria um banco ou define o uso da **Database** se ela já existir. Mas só cria de fato depois que inserir algum documento (**Document**)

* **name_database**: o nome que você quer dar a sua base de dados

### Criar/Inserir Collections e Documents
```db.name_collection.insertOne({key:value,key2:value2})```

Cria se não houver, e insere os Documents na Collection. (Isere dados na tabela).

* **name_collection**: o nome que você quer dar a sua coleção (tabela)
* **key**: nome do campo
* **value**: valor do campo (o dado)

### Listar 
```db.name_collection.find()```

```db.name_collection.find({key:value})```


Retorna todas as Document da Collection que encontrar com os parâmetros passados.Se não passar um parâmetro retorna a collection inteira.

* **key**: nome do campo que deseja procurar
* **value**: valor que do campo que deseja encontrar.
  
Exemplo:db.pokemon.findOne({type:fire}) -> Retorna todos as instâncias de pokémon do tipo fogo.

### Encontrar apenas um valor ou campo
```db.name_collection.findOne({key:value})```

Retorna um Document da Collection.Se não passar um parâmetro retorna um dado qualquer, mas apenas um.

* **key**: nome do campo que deseja procurar
* **value**: valor que do campo que deseja encontrar.

Exemplo:db.pokemon.find({name:pikachu}) -> Retorna uma instância de pokémon que tenha o nome Pikachu.


### Exibir todas as collections
```show collections```

Exibe todas as coleções do banco atual.


### Remover uma Collection
```db.name_collection.drop()```

Apaga a collection e todos os dados inseridos


### Remover uma Database
```db.dropDatabase()```

Atenção, esse comando apaga a base de dados atual da qual você está trabalhando, ou seja, cuidado. Antes de usar entre no banco que deseja remover.

### Verificar Status do MongoDB
```mongostat```

Mostra em tempo real o status do banco e movimentações que estão sendo realizadas

