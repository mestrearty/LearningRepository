import org.junit.jupiter.api.*
import java.lang.NullPointerException
import kotlin.test.DefaultAsserter.fail

class MainTest {

    //Nesse arquivo temos a estrutura para realizarmos testes
    //Veja que temos aqui uma classe e em cima de cada função
    //devemos criar um @Test, que é um marcador para avisar que é 
    //uma função do tipo test
    //Com o marcador "DIsplayName" podemos definir um apelido para que apareça
    //em nosso terminal de Teste

    //Para rodar o teste será necessário que utilize o JetBrains, pois ao lado
    //esquerdo de cada linha das funções você verá um sinalizador com uma marcação
    //de símbolo de execução de teste

    //A biblioteca Assertions possuí dezenas de métodos para fazer a verificação de
    //cada uma das funções que temos em diversas classes e documentos.
    //Cada função tem como objetivo fazer comparações ou verificar se o valor
    //recebido é igual ao esperado. 
    //Se recebermos o esperado, passará no teste,
    //Caso contrário o teste falhará e teremos que reimplementar os métodos 
    //até que passe em nossa suíte de teste

    @Test
    @DisplayName("Teste metodo XXOO")
    fun testCountXO() {
        //Assertions.assertTrue() verifica se o valor retornado é True
        Assertions.assertTrue(countXO("xxoo"))
        Assertions.assertTrue(countXO("Xxoo"))
        Assertions.assertTrue(countXO("xXoo"))
        Assertions.assertTrue(countXO("xxOo"))
        Assertions.assertTrue(countXO("xxoO"))
        //Contudo, do jeito que temos aqui, caso algum dos itens de falso, ele termina a execução do teste
        //e avisa que o teste como um todo falhou
    }

    @Test
    @DisplayName("Teste metodo XXOO com .assertAll")
    fun testeCountXOAssertAll() {
        Assertions.assertAll(
            { Assertions.assertTrue(countXO("xxoos")) },
            { Assertions.assertTrue(countXO("Xxoox")) },
            { Assertions.assertTrue(countXO("xXoo")) },
            { Assertions.assertTrue(countXO("xxOox")) },
            { Assertions.assertTrue(countXO("xxoO")) })
        //Com .assertAll garantimos que cada item será testado,independente da falha
    }


    @Test
    @Disabled
    fun naoImplementado() {
        //aqui não rodará pois ainda não implementamos e avisamos que não é pra rodar
    }

    @Test
    fun vaiFalhar() {
        fail("Vou falhar de toda forma! Não posso terminar os testes sem esse método pronto!")
        //Aqui garantimos que o teste falhará. Utilize para marcar que precisa ser implementado ou finalizado
    }

    @Test
    fun assumption() {
        /*Com assumption garantimos que certas partes dos testes sejam executados
        somente se um teste anterior passe.
        */

        //Aqui fazemos o teste e sinalizamos que assumimos que o resultado será "True",
        //E se de fato se concretizar, poderemos continuar
        Assumptions.assumeTrue(countXO("xxoo"))

        //Aqui sinalizamos que essa parte do teste só será executada se e somente si a .assumeTrue passar anteriormente
        Assertions.assertTrue(seraQueVouRodar())

        //podemos utilizar isto para pegar algum valor de variável para construção do corpo do teste
        //ou até algum retorno de apis externas
    }

    @Test
    fun exception() {
        //Esse tipo de teste pega falhas no sistemas.
        //Isso é muito importante pois podemos criar nossos próprios tipos de falhas.
        //Aqui no caso passomos o ttipo NullPointerException, mas não impede de criamos o nosso próprio
        assertThrows<NullPointerException> { forcandoNullPointer() }
    }
}