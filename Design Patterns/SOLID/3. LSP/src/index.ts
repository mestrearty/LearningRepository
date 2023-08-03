import CreditCard from "./CreditCard";
import DebitCard from "./DebitCard";
import NubankRewards from "./NubankRewards";

//Veja que aqui chamamos o cartão de crétido dentro da variável "card" e a executamos
let card = new CreditCard();
card.validate();
card.collectPaymant();

//Repare que se carregarmos com a classe do cartão de Débito a mesma variáve, 
//o código continua funcionando, porque possuem a mesma implementação da classe pai
card = new DebitCard();
card.validate();
card.collectPaymant();

//E se criarmos um novo método de saldo que ao em vez de usar crédito ou saldo em conta 
//utilize de pontos, ela também vai funcionar com os mesmo métodos sem problemas
card = new NubankRewards();
card.validate();
card.collectPaymant();

//Assim o código não quebra. Você poderia implementar uma função de pagamento que a lógica básica
//é sempre a mesma que no nosso caso é "Validar" e depois "Pagar"
//mas as classes que de fato executarão o pagamento vai variar de acordo com o
//método de pagamento desejado, sem precisar ficar fazendo um código para cada pagamento

//Apenas para ilustrar, veja essa função que recebe o método de pagamento
//Que pode ser 3 pagamentos diferentes que implementamos
//Que garantia teríamos que todos os 3 são capazes de Validar e Pagar?
//Todas, porque todas extendem o método pai que é o "NubankCard"
function pay(paymantMethod: CreditCard | DebitCard | NubankRewards): void {
    console.log("\nBora pagar né?");
    paymantMethod.validate();
    paymantMethod.collectPaymant();
}

//Pagando com crédito
card = new CreditCard();
pay(card);

//Pagando com Débito
card = new DebitCard();
pay(card);

//Pagando com Pontos
card = new NubankRewards();
pay(card);

//Veja que fiz 3 pagamentos diferentes com a mesma função.
//A ideia do liskov é que você possa realizar manutenções 
//e fazer alterações sem quebrar o seu código