import { Request, Response } from "express";

export class PokemonMiddleware {
  public get(req: Request, res: Response) {
    const id = req.params.id;

    let pokemon: any = "Não encontrado";

    if (id == "25") {
      pokemon = {
        id: 25,
        name: "Pikachu",
        type: "Eletric",
        weakness: "Ground",
      };
    }
    res.send(pokemon);
  }

  public post(req: Request, res: Response) {
    const query = req.query;
    console.log(query);
    res.send(query);
  }
}

export default new PokemonMiddleware();
