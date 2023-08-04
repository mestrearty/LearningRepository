# CREATE (C)
Método reponsável por inserimos informações em nossas coleções.

#### Script básico para inserção:

```javascript
//Modelo:
> db.<collection>.insertOne({<dados>})

//Exemplo:
> db.pessoas.insertOne({nome:"Arty", idade:28})
> db.pessoas.insertOne({nome:"Luzão", idade:24, sexo: "Feminino"})
```

#### Inserindo vários dados de uma vez só

```javascript
//Modelo:
> db.<collection>.insertMany([{<dados>}])

//Exemplo:
> db.pessoas.insertMany([{nome:"Maria", idade:28},{nome:"Augustinho", idade:27, sexo: "Masculino"},{nome:"Lily", idade:20, games: ["DBD","Lolzin", "Dotinha"]} ])
```

#### Método antigo de inserção (Legado - Evitar usar)

```javascript
//Modelo:
> db.<collection>.insert({<dados>})
> db.<collection>.insert([{<dados>}])


//Exemplo:
> db.pessoas.insert({nome:"Arty", idade:28})
> db.pessoas.insert(
    [
        {nome:"Maria", idade:28},
    {nome:"Augustinho", idade:27, sexo: "Masculino"},
    {nome:"Lily", idade:20, games: ["DBD","Lolzin", "Dotinha"]}
    ])
```

#### Definindo o ID de forma manual

```javascript
//Modelo:
> db.<collection>.insertOne({_id:"id",<dados>})

//Exemplo:
> db.pessoas.insertOne({_id:"sou1IDMesmoNãoDevendoSer",nome:"Arty", idade:28})
```

#### Limitando tempo de inserção no banco

É possível limitar o tempo que o usuário realiza uma ação em nosso banco. Isso é útil para evitar conexões gigantescas não desejadas que podem travar recursos da aplicação

```javascript
//Modelo:
> db.<collection>.insertMany(
    [{<dados>}],
    { w: "majority", wtimeout: 100 }
    )

//Exemplo:
> db.pessoas.inserMaty(
  [
    { nome: "Maria", idade: 28 },
    { nome: "Augustinho", idade: 27, sexo: "Masculino" },
  ],
  { w: "majority", wtimeout: 100 }
);
```

Com essa configuração o banco retornará um erro de timeout caso exceta o tempo do `wtimeout` que foi definido em '100ms' em nosso código exemplo.
