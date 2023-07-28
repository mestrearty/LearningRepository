 # Lidando com Parâmetros

 ### Criando Coleções Limitadas por Tamanho
 ```db.createCollection("nome_coleção",{capped: true, size:1000, max: 3})```
 
 * *nome_coleção*: nome da coleção que ta criando
 * *capped*: parâmetro que sinaliza que é uma coleção limitada
 * *size*: tamanho em bytes máximo
 * *max*: quantidade máxima de Documents que pode salvar.

Com esse comando você cria uma coleção limitada por tamanho ou quantidade de registro. Quando você atingir o valor máximo ele não alertará erro, mas sim substituirá o valor mais antigo.

 