const texto = '<div>Conteudo 01</div><div>Conteudo 02</div>'
regext = (texto, regex)=> console.log(texto.match(regex));


//quantificadores são gulosos (greedy)...
regext(texto,/<div>.+<\/div>/g);
regext(texto,/<div>.*<\/div>/g);
regext(texto,/<div>.{0,100}<\/div>/g);

//quantificadores não gulosos (lazy)...
regext(texto,/<div>.+?<\/div>/g);
regext(texto,/<div>.*?<\/div>/g);
regext(texto,/<div>.{0,100}?<\/div>/g);

