### Implementação ISP

Para melhor vizualisar o conceito desse princípio temos aqui 2 diretórios:
1. Implementação inicial onde há uma não implementação do princípio, em que nossas classes Car e Motorcycle ficam com métodos
não implementados da Interface "IVehicle"sendo uma classe inflada.  
[> Sem ISP](./src/vehicles%20Sem%20ISP/)

2. Implementação final onde há a implementação do princípio, em que nossa interface IVehicle é dividida em duas para poder suprir nossas classes Car e Motorcycle de forma
eficiente, sem ficar com métodos não utilizados.  
[> Com ISP](./src/vechicles%20Com%20ISP/)