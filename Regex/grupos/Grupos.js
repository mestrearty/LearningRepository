let texto = "O José Simão é muito engraçado... hehehehehehe";

regext = (regex) => console.log(texto.match(regex));

regext(/(he)+/g);

texto = "http://www.site.info www.escola.ninja.br google.com.ag";

regext(/(http:\/\/)?(www\.)?\w+\.\w{2,}(\.\w{2})?/g);
