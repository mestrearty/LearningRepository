# Design Patterns | Padrões de Projeto


## Princípio SOLID

### S - Single Responsibility Principle - SRP
#### Princípio da responsabilidade Única 

"Nunca deve haver mais de um motivo para uma classe mudar"

Cada classe deve ter um único objetivo e nunca fazer mais do que se é proposto por ela.

Exemplo: Uma classe responsável por calcular o frete de um produto deve garantir que apenás calculará o frete.
Caso precise salvar no banco de dados o valor do frete para uma consulta futura, outro classe deverá ser responsável por fazer a persistência do dado no banco, e não a nossa classe que é capaz de calcularo frete.

[Exemplo em implementação](SOLID/1.%20SRP/src/)

### O - Open Closed Principle
#### Princípio Aberto/Fechado
"Aberto para extensão e Fechado para modificação"

Você pode criar uma nova classe "B" para extender as funcionalidade da classe "A", mas nunca alterar o código da classe "A".
Você não tem como prever o que acontecerá no sistema com outras entidades que utilizam do código da classe "A". 
Ou seja, talvez aquela pequena mudança gere uma grande dor de cabeça.

Caso precise de toda a forma alterar a classe "A", o sugerido é que feche o sistema como "versão 1" e crie uma "versão 2" modificada e Ose crie uma classe "C" e.
[Exemplo em implementação](SOLID/2.%20OCP/src/)

### L - Liskov Substitution Principle
#### Princípio da Substituição de Liskov
"Uma classe derivada pode ser substituível por sua classe base"

Uma classe filha deve se comportar igual a classe pai, de forma que ela seja auto contida, e a remoção da classe pai não afetaria as funcionalidades da classe filha. 

Imagine a classe `Pikachu` que estente a classe `Pokémon`. A classe `Pikachu` deverá implementar todos os métodos de `Pokémon`, ou seja, deverá ser capaz de `atacar`, se `defender`, `entrar na pokébola`, igual qualquer outro `Pokémon`. `Pikachu` não poderá dizer que "não consegue entrar na pokébola, pois só quem sabe é seu pai `Pokémon`", porque `Pikachu` é um `Pokémon` e terá o seu jeito de `entrar na Pokébola` e que será diferente de outros `Pokémon` que extenderem a classe, como um `Charmander` ou `Bulbasaur`.

[Exemplo em implementação](SOLID/3.%20LSP/src/)