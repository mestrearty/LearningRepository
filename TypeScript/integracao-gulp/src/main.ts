import Livro from "./modelo/livro";
import $ from "jquery";

const livro = new Livro("Sprint", 30, 0.1);

$("body").append(`<h1>${livro.nome}</h1>`);
$("body").append(`<h2>${livro.precoComDesconto()}</h2>`);
