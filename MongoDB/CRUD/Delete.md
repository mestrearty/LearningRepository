# Delete (D)

Método para remover (apagar) dados da nossa coleção.

#### Script básico para remoção:

O comando deleteOne apaga o primeiro registro encontrado que correponda aos parâmetros passados. Se por exemplo apagar por nome e existir 2 ou mais pessoas com exatamente o mesmo nome, apenas o primeiro registro será removido.

```javascript
//Modelo:
> db.<collection>.deleteOne({parametro:valor})

//Exemplo:
> db.pessoas.deleteOne({nome:"Arty"})
> db.pessoas.insertOne({_id:"64cc9ec763d2445aabf24dfc"})
```

#### Removendo Vários

O comando é bem parecido com o `.deleteOne` com a diferença que ao em vez de apagar o primeiro registro, apaga todos os escontrados que corresponda com os parâmetros passados.

```javascript
//Modelo:
> db.<collection>.deleteMany({parametro:valor})

//Exemplo:
> db.pessoas.deleteMany({nome:"Maria"})
```

#### Removendo todos os dados de uma collection

Para apagar todos os dados da coleção basta utlizar o comando `.deleteMany` sem parâmetros.

```javascript
//Modelo:
> db.<collection>.deleteMany({})

//Exemplo:
> db.pessoas.deleteMany({})
```
