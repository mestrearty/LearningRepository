/** You can edit, run, and share this code. play.kotlinlang.org */
//https://pl.kotl.in/OGc6k_H9T

//Iterators são listas associadas a classes
//Veja a baixo onde criamos uma classe do tipo Pokemon da qual faremos uma lista
class Pokemon(val id: Int, val name: String)
    
//Agora temos uma classe que irá Iterar (percorrer) a Classe Pokémon
//Nossa classe como parâmetro recebe uma lista de pokemon
class Pokedex(val pokemons: List<Pokemon>){
    //e possui uma função iterator() que retorna um tipo Iterator de pokemon
     operator fun iterator(): Iterator<Pokemon>{
         return pokemons.iterator()//método .iterator()
     }
}


fun main() {
    //instanciamos a lista de pokemon na pokedex
    val pokedex = Pokedex(listOf(Pokemon(27, "Pikachu"),Pokemon(3,"Venussaur")))
    
    //percorremos essa pokedex em um for comum e acessamos seus valores com .id ou .name
    for (pokemon in pokedex){
        println("${pokemon.id} - ${pokemon.name}")
    }
    
    }
    
  