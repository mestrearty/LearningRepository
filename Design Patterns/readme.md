# Design Patterns | Padrões de Projeto


## Princípio SOLID

### S - Single Responsibility Principle - SRP
#### Princípio da responsabilidade Única 

"Nunca deve haver mais de um motivo para uma classe mudar"
Cada classe deve ter um único objetivo e nunca fazer mais do que se é proposto por ela.

Exemplo: Uma classe responsável por calcular o frete de um produto deve garantir que apenás calculará o frete.
Caso precise salvar no banco de dados o valor do frete para uma consulta futura, outro classe deverá ser responsável por fazer a persistência do dado no banco, e não a nossa classe que é capaz de calcularo frete.

[Exemplo em implementação](SOLID/SRP)