/** You can edit, run, and share this code. play.kotlinlang.org */
fun main() {
        val minhaString = "Pokémon é Top!"

        println(minhaString[0]) // exibe o char na posição específica
        println(minhaString.first()) // exibe o primeiro caractare

        println(
                        minhaString[minhaString.length - 1]
        ) // exibe o último caractare pegando o tamanho da string -1
        println(minhaString.last()) // exibe o último caractare

        // Utilize $ para reconhecer que é uma variável e ${} para função em meio ao texto
        println("O que acha de Pokémon? $minhaString") // exibe a variável 'minhaString'

        println(minhaString.uppercase())//Coloca tudo em caixa alta
        println(minhaString.lowercase())//Coloca tudo em caixa baixa
        

        // vazio ou em branco
        val empty = ""
        val blank = "              "

        println(empty.length) // tamanho de uma string vazia

        // Verificando que espaço conta como um caractere e não vazio
        println(blank.length) // =14
        println(empty.isEmpty() && empty.isBlank()) // =true
        println(blank.isEmpty()) // false
        println(blank.isBlank()) // true

        // Comparativos
        println(minhaString.startsWith("pok")) // verifica se começa com
        println(
                        minhaString.startsWith("pok", ignoreCase = true)
        ) // verifica se começa com e ignora se está máiuscula
        println(minhaString.endsWith("Pok")) // verifica se termina com

        // Lidando com espaços vazios
        val minhaStringComEspaco =
                        "         Pokémon é Top         " // Muitos espaços no início e fim
        println(minhaStringComEspaco.trim()) // Remove estes espaços
        println(minhaStringComEspaco.trimEnd()) // Remove só no final
        println(minhaStringComEspaco.trimStart()) // Remove só no início
}
