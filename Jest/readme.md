# Teste com Jest
Introdução ao teste unitário com Jest.

Exemplos e testes utilizados aqui poderão ser baixados e testandos do módulo [1. The Basics](1.%20The%20Basics/)

### Iniciando Jest no projeto em desenvolvimento
```bash
$ npm init -y
$ npm i -D typescript jest ts-jest @types/jest ts-node 
$ npx ts-jest config:init
```

Caso esteja utilizando Typescript, ao em vez de criar o arquivo de configuração do Jest com ```npx ts-jest config:init```, que gera um arquivo em .js, crie um arquivo chamado ```jest.config.ts``` na raiz do projeto e coloque o seguinte código:

```javascript
import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    verbose: true 
};

export default config;
```

* prest -> Define o que vamos usar para fazer o teste no progeto, no caso o 'ts-jest' para Typescript
* testEnviroment -> Definimos que será um ambiente de teste executando em NodeJS
* verbose: true -> Define que queremos mais informações a respeito do nosso teste.

Configure seu ```package.json``` para que possa executar o Jest com comando de teste ```$ npm test```:
```json
{
  "name": "1.-the-basics",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "jest" <- Esse cara aqui ó!(Não esquece de me remover) 
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/jest": "^29.5.3",
    "jest": "^29.6.2",
    "ts-jest": "^29.1.1",
    "ts-node": "^10.9.1",
    "typescript": "^5.1.6"
  }
}

``` 

Os testes serão executados para verificar o comportamento dos seus métodos. Sendo assim, na hora de criar a estrutura, você pode optar por na mesma pasta que estão os arquivos criar um arquivo de teste ou criar uma pasta separada destinada somente aos testes, exemplo:

```folder
> node_modules
> src
    >app
        * Utils.ts
        * Utils.test.ts
* jest.config.ts
* package-lock.json
* package.json
* tsconfig.json
```

ou 

```foldersistem
> node_modules
> src
    >app
        * Utils.ts
> test
    >app
        *Utils.test.ts
* jest.config.ts
* package-lock.json
* package.json
* tsconfig.json
```

Confesso que a segunda opção me agrada mais.

Para realizar um teste crie um arquivo com o nome do arquivo que será testado junto com um ".test", exemplo: ```Utils.test.ts```.

``` javascript
import { toUpperCase } from "../../app/Utils"; //importando o método que testarei

describe('Utils test suite', () => { //dando nome a suite de teste que esse arquivo testará. 
//Note que criamos uma função "()=>{}" que no seu interior deverá ter os testes da coleção de testes. 
    
    //você pode chamar o método de teste tanto por "test()" quanto pot "it()"
    //e em ambas teremos o padrão "test("descrição em string do que se espera que aconteça", ()=> {todo o teste})
    test('should return uppercase', () => {
        const result = toUpperCase('abc') //veja que aqui chamamos o método "toUpperCase"
        //esperamos aqui receber todo o texto em caixa alta e armazenar na variável "result"

        expect(result).toBe('ABC')//aqui faremos nossa comparação no teste
        // com expect(variável_com_resultado_do_teste).toBe('resultado_que_esperamos')
    })

})
```

Código Limpo:

Utils.ts:
```javascript
export function toUpperCase(arg: string) {
    return arg.toUpperCase();
}
```
Utils.test.ts
```javascript
import { toUpperCase } from "../../app/Utils";

describe('Utils test suite', () => {
    
    test('should return uppercase', () => {
        const result = toUpperCase('abc')

        expect(result).toBe('ABC')
    })

})
```

Ao executarmos o comando ```$ npm test``` veremos o seguinte resultado:

```javascript
> 1.-the-basics@1.0.0 test
> jest

 PASS  src/test/app/Utils.test.ts
  Utils test suite
> jest

 PASS  src/test/app/Utils.test.ts
  Utils test suite
    √ should return uppercase (2 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.017 s
Ran all test suites.
```

### Estrutura de um teste
Para criamos arquivos de teste, é recomendado que se siga uma estrutura básica de teste que segue o princípio AAA - Arrange, Act & Assert.

Veja aquele mesmo código agora com uma nova estrutura e novos nomes de variáveis.
```javascript
import { toUpperCase } from "../../app/Utils";

describe('Utils test suite', () => {
    
    it('should return uppercase of valid string', () => { 
        //arrange:
        const sut = toUpperCase;
        const expected = 'ABC'

        //action
        const actual = sut('abc')

        //assert
        expect(actual).toBe(expected)
    })

})
```
Além de trocarmos o método de ```test()``` por ```it()``` para facilitar a leitura, fizemos algumas coisas a mais.
Repare que dividimos o código em 3 partes com comentários, Arrange, Act e Assert (AAA).
Na parte de ```Arrange``` (Arranjo) nos organizamos o que será testado. 

Pegamos a função que será testada e a colocamos na variável "```sut```", que é uma sigla para ```System Under Test``` . Pegamos o resultado experado do que testaremos e inserimos em ```expected``` (o esperado).

Depois vamos para a ação, ou ```Action```, onde de fato rodamos a função que está em teste (System Under Test - SUT) passando algum valor para testar e armazenamos ao atual resultado em ```actual```.

Agora é a hora de afirmar (`Assert`) se o experado (`expet`) do atual resultado (`actual`) é (`toBe`) o que se espera (`expected`).
```javascript
expect(actual).toBe(expected)
```

Para quem entende inglês fica mais fácil, mas percebem que o código parece agora um texto? Tanto parece que eu mesmo acabei de textualizar em português com as variáveis e métodos.

Seguindo essa convensão, torna-se mais fácil que outras pessoas e até mesmo você no futuro possam ler o teste e compreender o que está sendo testado e o que se espera dele. Da hora né?

### Tipos de Comparativos

```.toBe()``` é utilizado para comparar tipos primitivos (string,number,...)

```.toEqual()``` é utilizado para comparar objetos { } ou Arrays []
  * Em caso de arrays ele verifica inclusive se os valores se encontram exatamente na mesma ordem, por exemplo
 * Array -> [1,2,3]
    * o -> [1,2,3] //Da verdadeiro
    * x -> [3,2,1] //Da falso   
  * Para verificar se existem os valores independe ta posição utilize ```.toEqual(expect.arrayContaining[])```
    * Array -> [1,2,3]
    * o -> [1,2,3] //Da verdadeiro
    * o -> [3,2,1] //Da Verdadeiro
  
```.toHaveLength(x)``` verifica se o tamanho é igual a `x`

```.toContain(y)``` verifica se naquele Array há o valor `y` 

```.toContain<string>``` é possível verificar inclusive se o array contém o elemento e na mesma tipagem

`.toBeUndefined()` verifica se é do tipo "Undefined"

`.toBeDefined()` verifica se é foi definida, ou seja, não é "Undefined"

`.toBeTruthy()` verifica se retorna uma verdade "True"

É possível fazer negações inserindo um ```.not``` antes do método de afirmação, ex:
```javascript
expect(actual).not.toBe(expected)
```

Exmeplo de usos:
```javascript
it(`should return info for valid string`, () => {
        const actual = getStringInfo("Word");

        expect(actual.lowerCase).toBe('word');
        expect(actual.extraInfo).toEqual({});

        expect(actual.characters.length).toBe(4);
        expect(actual.characters).toHaveLength(4);

        expect(actual.characters).toEqual(['W', 'o', 'r', 'd']);
        expect(actual.characters).toContain<string>('W');
        expect(actual.characters).toEqual(
            expect.arrayContaining(['o', 'r', 'W', 'd'])
        );

        expect(actual.extraInfo).not.toBe(undefined);
        expect(actual.extraInfo).not.toBeUndefined();
        expect(actual.extraInfo).toBeDefined();
        expect(actual.extraInfo).toBeTruthy();
    });
```

### Múltiplos testes de uma mesmo método
É possível também testar um mesmo método com parâmetros distintos utilizando um mesmo teste com o ```it.each```.

```javascript
 describe.only('ToUpperCase examples', () => {
        it.each([
            { input: 'abc', expected: "ABC" },
            { input: 'Digimon', expected: 'DIGIMON' },
            { input: 'pokemon', expected: 'POKEMON' }])('$input to UpperCase should be $expected', ({ input, expected }) => {
                const actual = toUpperCase(input);
                expect(actual).toBe(expected);
            });
    });
```

Veja que com esse código definimos 2 parâmetros padrões em cada objeto `input` e `expected` que são passados mais a frente dentro da função que o `it.each` irá rodar. Repare que o `it.each` recebe esses parâmetros como um array de objetos. Então muita atenção na hora de utilizar para não fazer confusão.