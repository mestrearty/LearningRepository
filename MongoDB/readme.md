# MongoDB
Mongo DB é um banco de dados não relacional. 

Diferente de bancos de dados relacionais, em bancos não relacionais como Mongodb, você não precisa ter o banco pronto antes de armazenar dados. As "tabelas" são criadas a medida que se vai inserindo os dados. Ou seja, você inclusive pode alterar as estruturas dos dados que entram em cada tabela em tempo de execução.

#### Nomenclatura
O Mongo possui nomenclatura própria que difere de bancos relacionais. Atente-se:

Mongo = Mysql
Database = Banco de dados
Collection = Tabelas
Documents = Dados

#### Sobre os IDs
Todo Document tem um id gerado automaticamente. Esse ID é um hash com a timestamp, e o mongo garante que sempre haja ao menos 1ms de diferença entre cada operação para garantir o ID único.

### Sumário
[1. Comandos Básicos](./Comandos_Basicos.md)  
[2. Métodos Complementares](./Metodos_Complementares.md)  
[3. Parâmetros](./Parametros.md)  
[4. Importarção e Exportação](./Importar__Exportar_Bancos_em_JSON.md)  
[5. CRUD](./CRUD/)  
-> [5.1 Sobre](./CRUD/Readme.md)  
-> [5.2 Create](./CRUD/Create.md)  
-> [5.3 Read](./CRUD/Read.md)  
-> [5.4 Update](./CRUD/Update.md)  
-> [5.5 Delete](./CRUD/Delete.md)  