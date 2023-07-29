const TemplateExpressions = () => {
    const name = "Arty";
    const pokemon = {
        dex: 25,
        name: "Pikachu",
        type: "Eletric"
    }

  return (
    <div>
          <h3>Dale {name}! Já pegou Pokémon hoje?</h3>
          <h4>Acabou de aparecer um {pokemon.name} do tipo {pokemon.type}. Ele é o número {pokemon.dex} na pokedex!</h4>  
      </div>
  );
};

export default TemplateExpressions;
