# Básico sobre React

## Componentes
* Os componentes devem ficar em uma pasta nomeada *components*: "FirstComponent.js"
* Nomeados em *camel case* 
* O código do componente deve estar dentro de uma função
* A função deverá ser exportada para que seja importada em outro locais.
* Para usar o componente após a importação utilize o formato <ComponentName>
* Para comentar em um componente você pode usar:
  * Na parte da função: //Comentário
  * No JSX: {/\*Comentario*/}
* Um componente pode ser reutilizado em vários outros componentes
  * É possível inclusive formar uma hierarquia

## JSX
JSX é o "HTML" do React
Funções e métodos que tenham mesma nomeclatura em JS e HTML são alteradas a referência dela em HTML e mantém as de JS como: class -> className | for -> htmlFor

  ```html
  <div>
    <p className="minha_classe"> Não sou Class ok? </p>
  </div>
  ```

JSX pode ter apenas um elemento pai. Todo retorno (return) tem que estar encapsulado dentro de uma \<div>\</div> 

## Template Expressions
Você pode executar JS, variáveis e funções no JSX utilizando "{  }" dentro do HTML

Exemplo:
```JSX
const TemplateExpressions = () => {
    const name = "Arty";
    const pokemon = {
        dex: 25,
        name: "Pikachu",
        type: "Eletric"
    }

  return (
    <div>
          <h1>Dale {name}! Já pegou Pokémon hoje?</h1>
          <h2>Acabou de aparecer um {pokemon.name} do tipo {pokemon.type}. Ele é o número {pokemon.dex} na pokedex!</h2>  
      </div>
  );
};

export default TemplateExpressions;
```

## Eventos
Eventos tratam-se de interações e ações do usuário com a página, como clique do mause.

No React tais eventos já estão "prontos", com funções próprias como "onClick"

Como padrão, as funções deverão começar com o prefixo "handle", como "handleUser".

```JSX
const Events = () => {
  const handeOnClick = (event) => {
    console.log("OH! You Toutch my Tralala!");
  };
  return (
    <div>
      <div>
        <button onClick={handeOnClick}>Clique aqui!</button>
      </div>
    </div>
  );
};

export default Events;
```

## Renderização
É possível renderizar HTML em tempo de execução com JSX, utilizando funções e variáveis. Veja um exemplo onde o que é renderizado varia de acordo com o parâmetro passado na função:

