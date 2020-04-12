const texto = `
Os e-mails dos convidados são:
    - fulano@cod3r.com.br
    - xico@gmail.com
    - joao@empresa.info.br
    - maria_silva@registro.br
    - rafa.sampaio@yahoo.com
`

console.log(texto.match(/\w+@\w+.com/g))
console.log(texto.match(/\w+@\w+.com.br/g))
console.log(texto.match(/\w+@\w+.info.br/g))
console.log(texto.match(/\w+@\w+.+br/g))
console.log(texto.match(/\w+@\w+.\w+/g))
console.log(texto.match(/\w+@.+/g))