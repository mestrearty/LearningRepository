# Métodos Complementares


 ### .pretty()
```db.database_name.find().pretty()```

Exibe o resultado de uma forma mais legível. Ex:

Comando:``` db.pessoas.find().pretty()```

Retorno:
```JSON
{
        "_id" : ObjectId("64c3d3be42dc4834b777e001"),
        "name" : "Pedro",
        "idade" : 28
}
{
        "_id" : ObjectId("64c3d3d342dc4834b777e002"),
        "name" : "Luana",
        "idade" : 25
}
```