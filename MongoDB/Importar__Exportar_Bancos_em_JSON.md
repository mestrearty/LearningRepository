# Importando e Exportando Bancos em JSON

MongoDB é compatível com o formato .json, sendo assim é possível exportar e importar bancos nesse formato.

## Comandos



### Importar
```mongoimport <arquivo> -d <database>  -c <collection>```

Com esse comando é possível passar um arquivo em .json e importar. O arquivo terá será importado para a collection que você selecionar/criar em -c \<collection>

Você vai utilizar fora da aplicação Mongodb em terminal. É uma aplicação própria.

### Exportar
```mongoexport -c <collection>  -d <database> -o <output>```

Com esse comando é possível exportar em arquivo .json de uma collection.


### Importar Banco com múltiplas coleções
```mongorestore <diretorio>```
Importa e já configura o banco.

### Exportar Banco com múltiplas coleções
```mongodump -d <banco> -o <diretorio>```
Exporta em .BSON um banco que poderá ser utilizado para importar novamente.